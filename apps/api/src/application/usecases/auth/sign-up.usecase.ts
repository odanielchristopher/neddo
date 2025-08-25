import { hash } from 'bcryptjs';

import { UsersRepository } from '@infra/database/repositories/users.repository';
import { JwtService } from '@infra/lib/jwt.service';
import { Inject, Injectable } from '@kernel/decorators';
import { EmailAlreadyInUseException } from '@kernel/exceptions';
import { SAULT_ROUNDS } from '@shared/constants';

@Injectable()
export class SignUpUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    @Inject(JwtService)
    private readonly jwtService: JwtService,
  ) {}

  async execute({
    name,
    email,
    password,
  }: SignUpUseCase.Input): Promise<SignUpUseCase.Output> {
    const emailAlreadyExists = await this.usersRepository.findUnique({
      where: { email },
    });

    if (emailAlreadyExists) {
      throw new EmailAlreadyInUseException();
    }

    const hashedPassword = await hash(password, SAULT_ROUNDS);

    const user = await this.usersRepository.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const accessToken = this.jwtService.sign({
      sub: user.id,
    });

    return {
      accessToken,
    };
  }
}

export namespace SignUpUseCase {
  export type Input = {
    name: string;
    email: string;
    password: string;
  };

  export type Output = {
    accessToken: string;
  };
}
