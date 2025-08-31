import { OrganizationRole } from '@application/entities/organization.entity';
import { ListOrganizationUsersUseCase } from '@application/usecases/organizations/list-organization-users.usecase';
import { IController } from '@kernel/contracts';
import { Controller, Get } from '@kernel/decorators';

@Controller('/users')
@Get()
export class ListOrganizationUsersController extends IController<ListOrganizationUsersController.Response> {
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
    role: OrganizationRole;
    user: {
      id: string;
      name: string;
      email: string;
    };
  }[];
}
