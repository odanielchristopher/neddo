import { OrganizationRole } from '@application/entities/organization.entity';
import { OrganizationsRepository } from '@infra/database/repositories/organizations.repository';
import { Injectable } from '@kernel/decorators';

@Injectable()
export class ListOrganizationUsersUseCase {
  constructor(
    private readonly organizationsRepository: OrganizationsRepository,
  ) {}

  async execute(): Promise<ListOrganizationUsersUseCase.Output> {
    return this.organizationsRepository.findOrgUsers() as unknown as ListOrganizationUsersUseCase.Output;
  }
}

export namespace ListOrganizationUsersUseCase {
  export type Input = {
    userId: string;
  };

  export type Output = {
    role: OrganizationRole;
    user: {
      id: string;
      name: string;
      email: string;
    };
  }[];
}
