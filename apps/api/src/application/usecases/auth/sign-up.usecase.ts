import { hash } from 'bcryptjs';

import { SignUpDto } from '@application/controllers/auth/schemas/sign-up.schema';
import { OrganizationsRepository } from '@infra/database/repositories/organizations.repository';
import { UsersRepository } from '@infra/database/repositories/users.repository';
import { JwtService } from '@infra/lib/jwt.service';
import { Inject, Injectable } from '@kernel/decorators';
import {
  ConflictException,
  EmailAlreadyInUseException,
} from '@kernel/exceptions';
import { SAULT_ROUNDS } from '@shared/constants';
import { slugify } from '@shared/utils';

@Injectable()
export class SignUpUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly organizationsRepository: OrganizationsRepository,
    @Inject(JwtService)
    private readonly jwtService: JwtService,
  ) {}

  async execute({
    user,
    organization,
  }: SignUpUseCase.Input): Promise<SignUpUseCase.Output> {
    const { name, email, password } = user;

    const emailAlreadyExists = await this.usersRepository.findUnique({
      where: { email },
    });

    if (emailAlreadyExists) {
      throw new EmailAlreadyInUseException();
    }

    const organizationAlreadyExists =
      await this.organizationsRepository.findOrgByName(organization.name);

    if (organizationAlreadyExists) {
      throw new ConflictException('Organization name already in use.');
    }

    const hashedPassword = await hash(password, SAULT_ROUNDS);

    const created = await this.usersRepository.create({
      data: {
        name,
        email,
        password: hashedPassword,
        organizations: {
          create: {
            role: 'OWNER',
            organization: {
              create: {
                ...organization,
                slug: slugify(organization.name),
              },
            },
          },
        },
      },
    });

    const accessToken = this.jwtService.sign({
      sub: created.id,
    });

    return {
      accessToken,
    };
  }
}

export namespace SignUpUseCase {
  export type Input = SignUpDto;

  export type Output = {
    accessToken: string;
  };
}
