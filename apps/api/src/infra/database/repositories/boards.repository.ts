import { Inject, Injectable } from '@kernel/decorators';

import { PrismaService } from '../prisma.service';

@Injectable({
  scope: 'request',
})
export class BoardsRepository {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject('organizationId') private readonly organizationId: string,
  ) {}

  create(createBoardDto: BoardsRepository.CreateBoardDto) {
    const { userId, name, columns, imagePath } = createBoardDto;

    return this.prismaService.board.create({
      data: {
        organizationId: this.organizationId,
        createdById: userId,
        name,
        imagePath,
        columns: columns && {
          createMany: {
            data: columns.map((column, position) => ({
              name: column.name,
              createdById: userId,
              position,
            })),
          },
        },
      },
      select: {
        id: true,
        name: true,
        imagePath: true,
        createdAt: true,
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        columns: {
          omit: {
            boardId: true,
          },
        },
      },
    });
  }
}

export namespace BoardsRepository {
  export type CreateBoardDto = {
    userId: string;
    name: string;
    imagePath?: string;
    columns?: {
      name: string;
    }[];
  };
}
