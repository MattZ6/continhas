import axios, { AxiosError } from 'axios';
import Router from 'next/router';

import { AuthCookies } from '@utils/authCookies';
import { parseRequestError } from '@utils/parseRequestError';

type FailedRequest = {
  onSuccess: (updatedAccessToken: string) => void;
  onFailure: (error: AxiosError) => void;
};

let isRefreshing = false;
let failedRequestsQueue: FailedRequest[] = [];

export function makeApiClient(context?: any) {
  type Authentication = {
    access_token: string;
    refresh_token: string;
  };

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SIMPLE_FINANCES_API_URL,
  });

  function setAccessTokenOnDefaultHeaders(
    authentication: Partial<Authentication>
  ) {
    if (authentication.access_token) {
      api.defaults.headers.common['X-Access-Token'] =
        authentication.access_token;
      (api.defaults.headers as any)['X-Access-Token'] =
        authentication.access_token;
    }
  }

  function saveAuthentication(data: Authentication) {
    setAccessTokenOnDefaultHeaders(data);
    AuthCookies.setAuthCookies(data, context);
  }

  const initialCookies = AuthCookies.getAuthCookies(context);

  setAccessTokenOnDefaultHeaders(initialCookies);

  api.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        const parsedError = parseRequestError(error);

        if (parsedError.error?.code === 'token.expired') {
          const currentCookies = AuthCookies.getAuthCookies(context);

          const originalRequestConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            api
              .post<Authentication>('/v1/auth/refresh', {
                refresh_token: String(currentCookies.refresh_token),
              })

              .then(response => {
                saveAuthentication(response.data);

                failedRequestsQueue.forEach(request =>
                  request.onSuccess(response.data.access_token)
                );
                failedRequestsQueue = [];
              })
              .catch((refreshTokenError: AxiosError) => {
                failedRequestsQueue.forEach(request =>
                  request.onFailure(refreshTokenError)
                );
                failedRequestsQueue = [];

                if (typeof window === 'undefined') {
                  return Promise.reject(new Error('Auth error'));
                }

                AuthCookies.removeRefreshTokenFromCookies();

                Router.replace('/login');

                return refreshTokenError;
              })
              .finally(() => {
                isRefreshing = false;
              });

            return new Promise((resolve, reject) => {
              failedRequestsQueue.push({
                onSuccess: (updatedAccessToken: string) => {
                  const headers = originalRequestConfig.headers ?? {};

                  headers['X-Access-Token'] = updatedAccessToken;

                  originalRequestConfig.headers = headers;

                  resolve(api(originalRequestConfig));
                },
                onFailure: (onFailureError: AxiosError) => {
                  reject(onFailureError);
                },
              });
            });
          }
        } else if (typeof window !== 'undefined') {
          AuthCookies.removeRefreshTokenFromCookies();

          Router.replace('/login');
        } else {
          return Promise.reject(new Error('Auth error'));
        }
      }

      return Promise.reject(error);
    }
  );

  return {
    api,
    saveAuthentication,
  };
}
