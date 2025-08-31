import { GetOwnDataUseCase } from '@application/usecases/users/get-own-data.usecase';
import { IController } from '@kernel/contracts';
import { Controller, Get } from '@kernel/decorators';
import { ActiveUserId } from '@shared/decorators';

@Controller('/me')
@Get()
export class GetOwnDataController extends IController<GetOwnDataController.Response> {
  constructor(private readonly getOwnDataUseCase: GetOwnDataUseCase) {
    super();
  }

  override async execute(
    @ActiveUserId() userId: string,
  ): Promise<GetOwnDataController.Response> {
    return this.getOwnDataUseCase.execute({ userId });
  }
}

export namespace GetOwnDataController {
  export type Response = GetOwnDataUseCase.Output;
}
