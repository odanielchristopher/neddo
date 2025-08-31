import { OrganizationRole } from '@application/entities/organization.entity';
import { ListUserOrganizationsUseCase } from '@application/usecases/organizations/list-user-organizations.usecase';
import { IController } from '@kernel/contracts';
import { Controller, Get, Inject } from '@kernel/decorators';

@Controller('')
@Get()
export class ListUserOrganizationsController extends IController<ListUserOrganizationsController.Response> {
  constructor(
    @Inject('userId') private readonly userId: string,
    private readonly listUserOrganizationsUseCase: ListUserOrganizationsUseCase,
  ) {
    super();
  }

  override async execute(): Promise<ListUserOrganizationsController.Response> {
    return this.listUserOrganizationsUseCase.execute({ userId: this.userId });
  }
}

export namespace ListUserOrganizationsController {
  export type Response = {
    role: OrganizationRole;
    organization: {
      id: string;
      name: string;
      slug: string;
      imagePath: string | null;
    };
  }[];
}
