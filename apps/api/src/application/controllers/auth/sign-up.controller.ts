import { SignUpUseCase } from '@application/usecases/auth/sign-up.usecase';
import { BaseController } from '@kernel/contracts';
import { Body, Controller, Post, StatusCode } from '@kernel/decorators';
import { HttpStatus } from '@kernel/enums/http-status.enum';

import { SignUpDto, signUpSchema } from './schemas/sign-up.schema';

@Controller('/sign-up')
@Post()
@StatusCode(HttpStatus.CREATED)
export class SignUpController extends BaseController<SignUpController.Response> {
  constructor(private readonly signInUseCase: SignUpUseCase) {
    super();
  }

  override async execute(
    @Body(signUpSchema) signInDto: SignUpDto,
  ): Promise<SignUpController.Response> {
    const {
      user: { name, email, password },
    } = signInDto;

    return this.signInUseCase.execute({ name, email, password });
  }
}

export namespace SignUpController {
  export type Response = {
    accessToken: string;
  };
}
