import type { AxiosInstance } from 'axios';

import { httpClient } from './httpClient';
import { uploadsService, type UploadsService } from './uploadsService';

class AuthService {
  constructor(
    private readonly httpClient: AxiosInstance,
    private readonly uploadsService: UploadsService,
  ) {}

  signin = async ({
    email,
    password,
  }: AuthService.SignInInput): Promise<AuthService.SignInOutPut> => {
    const {
      data: { accessToken, refreshToken },
    } = await this.httpClient.post<AuthService.SignInOutPut>('/auth/sign-in', {
      email,
      password,
    });

    return {
      accessToken,
      refreshToken,
    };
  };

  signup = async ({
    user,
    organization,
  }: AuthService.SignUpInput): Promise<AuthService.SignUpOutPut> => {
    const [userAvatarPath, orgAvatarPath] = await Promise.all([
      user.avatar && this.uploadsService.uploadFile({ file: user.avatar }),
      organization.avatar &&
        this.uploadsService.uploadFile({ file: organization.avatar }),
    ]);

    const {
      data: { accessToken, refreshToken },
    } = await this.httpClient.post<AuthService.SignUpOutPut>('/auth/sign-up', {
      user: {
        avatarPath: userAvatarPath,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        password: user.password,
      },
      organization: {
        avatarPath: orgAvatarPath,
        name: organization.name,
      },
    });

    return {
      accessToken,
      refreshToken,
    };
  };

  refreshToken = async (refreshTokenId: string) => {
    const {
      data: { accessToken, refreshToken },
    } = await httpClient.post<AuthService.SignInOutPut>('/auth/refresh-token', {
      refreshToken: refreshTokenId,
    });

    return {
      accessToken,
      refreshToken,
    };
  };
}

export const authService = new AuthService(httpClient, uploadsService);

export namespace AuthService {
  export type SignInInput = {
    email: string;
    password: string;
  };

  export type SignInOutPut = {
    accessToken: string;
    refreshToken: string;
  };

  export type SignUpInput = {
    user: {
      avatar?: File;
      firstName: string;
      lastName: string;
      age: number;
      email: string;
      password: string;
    };
    organization: {
      avatar?: File;
      name: string;
    };
  };

  export type SignUpOutPut = {
    accessToken: string;
    refreshToken: string;
  };
}
