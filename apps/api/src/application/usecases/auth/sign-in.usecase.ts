import { compare } from 'bcryptjs';

import { UsersRepository } from '@infra/database/repositories/users.repository';
import { AuthGateway } from '@infra/gateways/auth.gateway';
import { Injectable } from '@kernel/decorators';
import { InvalidCredentialsException } from '@kernel/exceptions';

@Injectable()
export class SignInUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly authGateway: AuthGateway,
  ) {}

  async execute({
    email,
    password,
  }: SignInUseCase.Input): Promise<SignInUseCase.Output> {
    const user = await this.usersRepository.findUnique({
      where: { email },
    });

    if (!user) {
      throw new InvalidCredentialsException();
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new InvalidCredentialsException();
    }

    const accessToken = this.authGateway.generateAccessToken(user.id);

    const refreshToken = await this.authGateway.generateRefreshToken(user.id);

    return {
      accessToken,
      refreshToken: refreshToken.id,
    };
  }
}

export namespace SignInUseCase {
  export type Input = {
    email: string;
    password: string;
  };

  export type Output = {
    accessToken: string;
    refreshToken: string;
  };
}
