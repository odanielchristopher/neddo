import { CreateBoardUseCase } from '@application/usecases/boards/create-board.usecase';
import { BaseController } from '@kernel/contracts';
import { Body, Controller, Post, StatusCode } from '@kernel/decorators';
import { HttpStatus } from '@kernel/enums';
import { ActiveUserId } from '@shared/decorators';

import {
  CreateBoardDto,
  createBoardSchema,
} from './schemas/create-board.schema';

@Controller('')
@Post()
@StatusCode(HttpStatus.CREATED)
export class CreateBoardController extends BaseController<CreateBoardController.Response> {
  constructor(private readonly createBoardUseCase: CreateBoardUseCase) {
    super();
  }

  override async execute(
    @ActiveUserId() userId: string,
    @Body(createBoardSchema) createBoardDto: CreateBoardDto,
  ): Promise<CreateBoardController.Response> {
    return this.createBoardUseCase.execute({ userId, createBoardDto });
  }
}

export namespace CreateBoardController {
  export type Response = CreateBoardUseCase.Output;
}
