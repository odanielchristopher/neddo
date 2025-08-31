import { SignUpUseCase } from '@application/usecases/auth/sign-up.usecase';
import { IController } from '@kernel/contracts';
import { Body, Controller, Post, StatusCode } from '@kernel/decorators';
import { HttpStatus } from '@kernel/enums';

import { SignUpDto, signUpSchema } from './schemas/sign-up.schema';

@Controller('/sign-up')
@Post()
@StatusCode(HttpStatus.CREATED)
export class SignUpController extends IController<SignUpController.Response> {
  constructor(private readonly signInUseCase: SignUpUseCase) {
    super();
  }

  override async execute(
    @Body(signUpSchema) signInDto: SignUpDto,
  ): Promise<SignUpController.Response> {
    const { user, organization } = signInDto;

    return this.signInUseCase.execute({ user, organization });
  }
}

export namespace SignUpController {
  export type Response = {
    accessToken: string;
  };
}
