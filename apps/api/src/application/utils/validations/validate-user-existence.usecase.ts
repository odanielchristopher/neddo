import { User } from '@application/entities/user';
import { UsersRepository } from '@infra/database/repositories/users.repository';
import { Injectable } from '@kernel/decorators';
import { NotFoundException } from '@kernel/exceptions';

@Injectable()
export class ValidateUserExistenceUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  // Genérico para tuplas de qualquer tamanho
  async validate<TUserIds extends string[]>(
    input: ValidateUserExistenceUseCase.Input<TUserIds>,
  ): Promise<ValidateUserExistenceUseCase.Output<TUserIds>> {
    const userIds = [...input];

    const users = await this.usersRepository.findMany({
      where: {
        id: { in: userIds },
      },
    });

    if (users.length !== userIds.length) {
      throw new NotFoundException('User not found.');
    }

    // Cria map id → user
    const userMap = new Map(users.map((u) => [u.id, u]));

    // Retorna na mesma ordem do input
    return userIds.map(
      (id) => userMap.get(id)!,
    ) as ValidateUserExistenceUseCase.Output<TUserIds>;
  }
}

export namespace ValidateUserExistenceUseCase {
  // Input agora precisa ser tupla literal para inferência
  export type Input<T extends string[]> = readonly [...T];

  // Output será tupla de User correspondente
  export type Output<T extends string[]> = { [K in keyof T]: User };
}
