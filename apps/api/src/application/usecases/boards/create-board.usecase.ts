import { CreateBoardDto } from '@application/controllers/boards/schemas/create-board.schema';
import { BoardsRepository } from '@infra/database/repositories/boards.repository';
import { Injectable } from '@kernel/decorators';

import { ValidateUserOwnershipUseCase } from '../users/validate-user-ownership.usecase';

@Injectable()
export class CreateBoardUseCase {
  constructor(
    private readonly boardsRepository: BoardsRepository,
    private readonly validateUserOwnershipUseCase: ValidateUserOwnershipUseCase,
  ) {}

  async execute({
    userId,
    createBoardDto,
  }: CreateBoardUseCase.Input): Promise<CreateBoardUseCase.Output> {
    const { name, imagePath, users } = createBoardDto;

    if (users) {
      await this.validateUserOwnershipUseCase.validate(
        users.map(({ id }) => id),
      );
    }

    const result = await this.boardsRepository.create({
      userId,
      name,
      imagePath,
      columns: [
        { name: 'A Fazer' },
        { name: 'Fazendo' },
        { name: 'Concluído' },
      ],
      users,
    });

    return result;
  }
}

export namespace CreateBoardUseCase {
  export type Input = {
    createBoardDto: CreateBoardDto;
    userId: string;
  };

  export type Output = {
    id: string;
    name: string;
    imagePath: string | null;
    columns: {
      id: string;
      name: string;
    }[];
  };
}
