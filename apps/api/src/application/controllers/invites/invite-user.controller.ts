import { InviteUserUseCase } from '@application/usecases/invites/invite-user.usecase';
import { BaseController } from '@kernel/contracts';
import { Body, Controller, Get, StatusCode } from '@kernel/decorators';
import { HttpStatus } from '@kernel/enums';
import { ActiveUserId } from '@shared/decorators';

import { InviteUserDto, inviteUserSchema } from './schemas/invite-user.schema';

@Controller('/invite-user')
@Get()
@StatusCode(HttpStatus.OK)
export class InviteUserController extends BaseController<InviteUserController.Response> {
  constructor(private readonly inviteUserUseCase: InviteUserUseCase) {
    super();
  }

  override async execute(
    @ActiveUserId() userId: string,
    @Body(inviteUserSchema) { expiresAt, invitedId, role }: InviteUserDto,
  ): Promise<InviteUserController.Response> {
    return this.inviteUserUseCase.execute({
      userId,
      invitedId,
      expiresAt,
      role,
    });
  }
}

export namespace InviteUserController {
  export type Response = void;
}
