import { RefreshTokenUseCase } from '@application/usecases/auth/refresh-token.usecase';
import { IController } from '@kernel/contracts';
import { Body, Controller, Post, StatusCode } from '@kernel/decorators';
import { HttpStatus } from '@kernel/enums';

import {
  RefreshTokenDto,
  refreshTokenSchema,
} from './schemas/refresh-token.schema';

@Controller('/refresh-token')
@Post()
@StatusCode(HttpStatus.OK)
export class RefreshTokenController extends IController<RefreshTokenController.Response> {
  constructor(private readonly refreshTokenUseCase: RefreshTokenUseCase) {
    super();
  }

  override async execute(
    @Body(refreshTokenSchema) refreshTokenDto: RefreshTokenDto,
  ): Promise<RefreshTokenController.Response> {
    const { refreshToken } = refreshTokenDto;

    return this.refreshTokenUseCase.execute({ refreshToken });
  }
}

export namespace RefreshTokenController {
  export type Response = {
    refreshToken: string;
    accessToken: string;
  };
}
