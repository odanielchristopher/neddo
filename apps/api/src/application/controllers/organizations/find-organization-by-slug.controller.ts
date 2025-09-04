import {
  Organization,
  OrganizationRole,
} from '@application/entities/organization.entity';
import { FindOrganizationBySlugUseCase } from '@application/usecases/organizations/find-organization-by-slug.usecase';
import { IController } from '@kernel/contracts';
import { Controller, Get, Query } from '@kernel/decorators';
import { ActiveUserId } from '@shared/decorators';

@Controller(':slug')
@Get()
export class FindOrganizationBySlugController extends IController<FindOrganizationBySlugController.Response> {
  constructor(
    private readonly findOrganizationBySlugUseCase: FindOrganizationBySlugUseCase,
  ) {
    super();
  }

  override async execute(
    @ActiveUserId() userId: string,
    @Query('slug') slug: string,
  ): Promise<FindOrganizationBySlugController.Response> {
    return this.findOrganizationBySlugUseCase.execute({ userId, slug });
  }
}

export namespace FindOrganizationBySlugController {
  export type Response = {
    role: OrganizationRole;
    organization: Organization;
  };
}
