import { AuthGateway } from '@infra/gateways/auth.gateway';
import { Injectable } from '@kernel/decorators';

@Injectable()
export class ConfirmForgotPasswordUseCase {
  constructor(private readonly authGateway: AuthGateway) {}

  async execute({
    code,
  }: ConfirmForgotPasswordUseCase.Input): Promise<ConfirmForgotPasswordUseCase.Output> {
    const { resetPasswordToken } = await this.authGateway.confirmForgotPassword(
      {
        code,
      },
    );

    return {
      resetPasswordToken,
    };
  }
}

export namespace ConfirmForgotPasswordUseCase {
  export type Input = {
    code: string;
  };

  export type Output = {
    resetPasswordToken: string;
  };
}
