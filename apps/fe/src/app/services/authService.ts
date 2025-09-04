import type { AxiosInstance } from 'axios';

import type { IUser } from '@app/entities/User';

import { httpClient } from './httpClient';

class AuthService {
  constructor(private readonly httpClient: AxiosInstance) {}

  signin = async ({
    email,
    password,
  }: AuthService.SignInInput): Promise<AuthService.SignInOutPut> => {
    const { data } = await this.httpClient.post<AuthService.SignInOutPut>(
      '/auth/sign-in',
      {
        email,
        password,
      },
    );

    return {
      accessToken: data.accessToken,
    };
  };
}

export const authService = new AuthService(httpClient);

export namespace AuthService {
  export type SignInInput = {
    email: string;
    password: string;
  };

  export type SignInOutPut = {
    accessToken: string;
  };

  export type MeOutput = IUser;
}
