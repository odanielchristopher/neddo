import type { AxiosInstance } from 'axios';

import type { IUser } from '@app/entities/User';

import { httpClient } from './httpClient';

class AuthService {
  constructor(private readonly httpClient: AxiosInstance) {}

  async me() {
    const { data } = await this.httpClient.get<AuthService.MeOutput>('/me');

    return data;
  }

  async signin({
    email,
    password,
  }: AuthService.SignInInput): Promise<AuthService.SignInOutPut> {
    return {
      accessToken: `${email}-${password}`,
    };
  }
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
