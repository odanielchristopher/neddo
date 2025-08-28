import { CreateBoardDto } from '@application/controllers/boards/schemas/create-board.schema';
import { BoardsRepository } from '@infra/database/repositories/boards.repository';
import { Injectable } from '@kernel/decorators';

@Injectable()
export class CreateBoardUseCase {
  constructor(private readonly boardsRepository: BoardsRepository) {}

  async execute({
    userId,
    createBoardDto,
  }: CreateBoardUseCase.Input): Promise<CreateBoardUseCase.Output> {
    const { name, imagePath } = createBoardDto;

    const result = await this.boardsRepository.create({
      userId,
      name,
      imagePath,
      columns: [
        { name: 'A Fazer' },
        { name: 'Fazendo' },
        { name: 'Concluído' },
      ],
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
