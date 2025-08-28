import { UsersRepository } from '@infra/database/repositories/users.repository';
import { Inject, Injectable } from '@kernel/decorators';
import { NotFoundException } from '@kernel/exceptions';

@Injectable({
  scope: 'request',
})
export class ValidateUserOwnershipUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    @Inject('organizationId') private readonly organizationId: string,
  ) {}

  async validate(input: ValidateUserOwnershipUseCase.Input) {
    const userIds = Array.isArray(input) ? input : [input];

    const count = await this.usersRepository.count({
      where: {
        id: { in: userIds },
        organizations: {
          some: {
            organizationId: this.organizationId,
            archived: false,
          },
        },
      },
    });

    if (count !== userIds.length) {
      throw new NotFoundException(
        'Um ou mais usuários não pertencem à organização',
      );
    }
  }
}

export namespace ValidateUserOwnershipUseCase {
  export type Input = string | string[];
}
