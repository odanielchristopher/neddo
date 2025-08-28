import { SignInUseCase } from '@application/usecases/auth/sign-in.usecase';
import { BaseController } from '@kernel/contracts';
import { Body, Controller, Post, StatusCode } from '@kernel/decorators';
import { HttpStatus } from '@kernel/enums';

import { SignInDto, signInSchema } from './schemas/sign-in.schema';

@Controller('/sign-in')
@Post()
@StatusCode(HttpStatus.OK)
export class SignInController extends BaseController<SignInController.Response> {
  constructor(private readonly signInUseCase: SignInUseCase) {
    super();
  }

  override async execute(
    @Body(signInSchema) signInDto: SignInDto,
  ): Promise<SignInController.Response> {
    const { email, password } = signInDto;

    return this.signInUseCase.execute({ email, password });
  }
}

export namespace SignInController {
  export type Response = {
    accessToken: string;
  };
}
