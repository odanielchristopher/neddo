import { ConfirmForgotPasswordUseCase } from '@application/usecases/auth/confirm-forgot-password.usecase';
import { IController } from '@kernel/contracts';
import { Body, Controller, Post, StatusCode } from '@kernel/decorators';
import { HttpStatus } from '@kernel/enums';

import {
  ConfirmForgotPasswordDto,
  confirmForgotPasswordSchema,
} from './schemas/confirm-forgot-password.schema';

@Controller('/confirm-forgot-password')
@Post()
@StatusCode(HttpStatus.OK)
export class ConfirmForgotPasswordController extends IController<ConfirmForgotPasswordController.Response> {
  constructor(
    private readonly confirmforgotPasswordUseCase: ConfirmForgotPasswordUseCase,
  ) {
    super();
  }

  override async execute(
    @Body(confirmForgotPasswordSchema)
    forgotPasswordDto: ConfirmForgotPasswordDto,
  ): Promise<ConfirmForgotPasswordController.Response> {
    const { code } = forgotPasswordDto;

    return this.confirmforgotPasswordUseCase.execute({ code });
  }
}

export namespace ConfirmForgotPasswordController {
  export type Response = {
    resetPasswordToken: string;
  };
}
