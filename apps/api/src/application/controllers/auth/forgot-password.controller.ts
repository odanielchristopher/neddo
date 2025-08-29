import { ForgotPasswordUseCase } from '@application/usecases/auth/forgot-password.usecase';
import { BaseController } from '@kernel/contracts';
import { Body, Controller, Post, StatusCode } from '@kernel/decorators';
import { HttpStatus } from '@kernel/enums';

import {
  ForgotPasswordDto,
  forgotPasswordSchema,
} from './schemas/forgot-password.schema';

@Controller('/forgot-password')
@Post()
@StatusCode(HttpStatus.OK)
export class ForgotPasswordController extends BaseController<ForgotPasswordController.Response> {
  constructor(private readonly forgotPasswordUseCase: ForgotPasswordUseCase) {
    super();
  }

  override async execute(
    @Body(forgotPasswordSchema) forgotPasswordDto: ForgotPasswordDto,
  ): Promise<ForgotPasswordController.Response> {
    const { email } = forgotPasswordDto;

    return this.forgotPasswordUseCase.execute({ email });
  }
}

export namespace ForgotPasswordController {
  export type Response = void;
}
