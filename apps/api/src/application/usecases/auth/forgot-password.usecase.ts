import { UsersRepository } from '@infra/database/repositories/users.repository';
import { AuthGateway } from '@infra/gateways/auth.gateway';
import { Injectable } from '@kernel/decorators';
import { NotFoundException } from '@kernel/exceptions';

@Injectable()
export class ForgotPasswordUseCase {
  constructor(
    private readonly authGateway: AuthGateway,
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute({
    email,
  }: ForgotPasswordUseCase.Input): Promise<ForgotPasswordUseCase.Output> {
    const user = await this.usersRepository.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    await this.authGateway.forgotPassword({
      email,
      userId: user.id,
    });
  }
}

export namespace ForgotPasswordUseCase {
  export type Input = {
    email: string;
  };

  export type Output = void;
}
