import { apiClient } from './apiClient';

export namespace GoogleLoginService {
  type Request = {
    code: string;
  };

  type Response = {
    access_token: string;
    refresh_token: string;
  };

  export async function execute(data: Request) {
    const { code } = data;

    return apiClient.post<Response>('/v1/auth/google', { code });
  }
}
