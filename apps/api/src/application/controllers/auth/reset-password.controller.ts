import { ResetPasswordUseCase } from '@application/usecases/auth/reset-password.usecase';
import { BaseController } from '@kernel/contracts';
import { Body, Controller, Post, StatusCode } from '@kernel/decorators';
import { HttpStatus } from '@kernel/enums';
import { ActiveUserId } from '@shared/decorators';

import {
  ResetPasswordDto,
  resetPasswordSchema,
} from './schemas/reset-password.schema';

@Controller('/reset-password')
@Post()
@StatusCode(HttpStatus.OK)
export class ResetPasswordController extends BaseController<ResetPasswordController.Response> {
  constructor(private readonly resetPasswordUseCase: ResetPasswordUseCase) {
    super();
  }

  override async execute(
    @ActiveUserId() userId: string,
    @Body(resetPasswordSchema) resetPasswordDto: ResetPasswordDto,
  ): Promise<ResetPasswordController.Response> {
    const { password } = resetPasswordDto;

    return this.resetPasswordUseCase.execute({ userId, password });
  }
}

export namespace ResetPasswordController {
  export type Response = {
    refreshToken: string;
    accessToken: string;
  };
}
