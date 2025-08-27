import { $Enums } from '@prisma/client';

import { OrganizationsRepository } from '@infra/database/repositories/organizations.repository';
import { Injectable } from '@kernel/decorators';

@Injectable()
export class ListUserOrganizationsUseCase {
  constructor(
    private readonly organizationsRepository: OrganizationsRepository,
  ) {}

  async execute({
    userId,
  }: ListUserOrganizationsUseCase.Input): Promise<ListUserOrganizationsUseCase.Output> {
    return this.organizationsRepository.findOrgsByUserId(userId);
  }
}

export namespace ListUserOrganizationsUseCase {
  export type Input = {
    userId: string;
  };

  export type Output = {
    role: $Enums.OrganizationRole;
    organization: {
      id: string;
      name: string;
      slug: string;
      imagePath: string | null;
    };
  }[];
}
