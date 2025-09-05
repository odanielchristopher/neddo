import { User } from '@application/entities/user';
import { UsersRepository } from '@infra/database/repositories/users.repository';
import { Injectable } from '@kernel/decorators';
import { NotFoundException } from '@kernel/exceptions';

@Injectable()
export class GetOwnDataUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute({
    userId,
  }: GetOwnDataUseCase.Input): Promise<GetOwnDataUseCase.Output> {
    const user = await this.usersRepository.findUnique({
      where: { id: userId, active: true },
      select: {
        id: true,
        avatarPath: true,
        firstName: true,
        lastName: true,
        age: true,
        email: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return user;
  }
}

export namespace GetOwnDataUseCase {
  export type Input = {
    userId: string;
  };

  export type Output = Omit<User, 'active'>;
}
