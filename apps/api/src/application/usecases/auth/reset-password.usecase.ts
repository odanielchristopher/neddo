import { hash } from 'bcryptjs';

import { UsersRepository } from '@infra/database/repositories/users.repository';
import { AuthGateway } from '@infra/gateways/auth.gateway';
import { Injectable } from '@kernel/decorators';
import { InvalidCredentialsException } from '@kernel/exceptions';
import { SAULT_ROUNDS } from '@shared/constants';

@Injectable()
export class ResetPasswordUseCase {
  constructor(
    private readonly authGateway: AuthGateway,
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute({
    userId,
    password,
  }: ResetPasswordUseCase.Input): Promise<ResetPasswordUseCase.Output> {
    const user = await this.usersRepository.findUnique({
      where: { id: userId, active: true },
    });

    if (!user) {
      throw new InvalidCredentialsException();
    }

    const [hashedPassword] = await Promise.all([
      hash(password, SAULT_ROUNDS),
      this.authGateway.resetRefreshTokens({
        userId: user.id,
      }),
    ]);

    const [refreshToken] = await Promise.all([
      this.authGateway.generateRefreshToken(user.id),
      this.usersRepository.update({
        where: {
          id: userId,
        },
        data: {
          password: hashedPassword,
        },
      }),
    ]);
    const accessToken = this.authGateway.generateAccessToken(user.id);

    return {
      accessToken,
      refreshToken: refreshToken.id,
    };
  }
}

export namespace ResetPasswordUseCase {
  export type Input = {
    userId: string;
    password: string;
  };

  export type Output = {
    accessToken: string;
    refreshToken: string;
  };
}
