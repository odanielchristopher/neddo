import { Injectable } from '@kernel/decorators';

@Injectable()
export class SignInUseCase {
  async execute({
    email,
    password,
  }: SignInUseCase.Input): Promise<SignInUseCase.Output> {
    return {
      accessToken: `${email}+${password}`,
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
  };
}
