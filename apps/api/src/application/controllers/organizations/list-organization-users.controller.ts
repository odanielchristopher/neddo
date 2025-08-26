import { $Enums } from '@prisma/client';

import { ListOrganizationUsersUseCase } from '@application/usecases/organizations/list-organization-users.usecase';
import { BaseController } from '@kernel/contracts';
import { Controller, Get } from '@kernel/decorators';

@Controller('/users')
@Get()
export class ListOrganizationUsersController extends BaseController<ListOrganizationUsersController.Response> {
  constructor(
    private readonly listOrganizationUsersUseCase: ListOrganizationUsersUseCase,
  ) {
    super();
  }

  override async execute(): Promise<ListOrganizationUsersController.Response> {
    return this.listOrganizationUsersUseCase.execute();
  }
}

export namespace ListOrganizationUsersController {
  export type Response = {
    role: $Enums.OrganizationRole;
    user: {
      id: string;
      name: string;
      email: string;
    };
  }[];
}
