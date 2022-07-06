import { setCookie, parseCookies } from 'nookies';

export namespace AuthCookies {
  type Authentication = {
    refresh_token: string;
    access_token: string;
  };

  export const ACCESS_TOKEN_COOKIE_KEY = 'sf.t';
  export const REFRESH_TOKEN_COOKIE_KEY = 'sf.r';

  export function setAuthCookies(data: Authentication, context?: any) {
    setCookie(context, ACCESS_TOKEN_COOKIE_KEY, data.access_token, {
      path: '/',
      maxAge: 30 * 24 * 60 * 60, // 👈 30 days
    });

    setCookie(context, REFRESH_TOKEN_COOKIE_KEY, data.refresh_token, {
      path: '/',
      maxAge: 30 * 24 * 60 * 60, // 👈 30 days
    });
  }

  export function getAuthCookies(context?: any): Partial<Authentication> {
    const cookies = parseCookies(context);

    return {
      access_token: cookies[ACCESS_TOKEN_COOKIE_KEY],
      refresh_token: cookies[REFRESH_TOKEN_COOKIE_KEY],
    };
  }

  export function getAuthCookiesFromCookies(cookies: {
    [key: string]: string;
  }): Partial<Authentication> {
    return {
      access_token: cookies[ACCESS_TOKEN_COOKIE_KEY],
      refresh_token: cookies[REFRESH_TOKEN_COOKIE_KEY],
    };
  }

  export function removeAuthTokenFromCookies(context: any = undefined) {
    setCookie(context, ACCESS_TOKEN_COOKIE_KEY, '', {
      path: '/',
      maxAge: -1,
    });
  }

  export function removeRefreshTokenFromCookies(context: any = undefined) {
    setCookie(context, REFRESH_TOKEN_COOKIE_KEY, '', {
      path: '/',
      maxAge: -1,
    });
  }

  export function destroyAuthCookies(context: any = undefined) {
    removeAuthTokenFromCookies(context);
    removeRefreshTokenFromCookies(context);
  }
}
