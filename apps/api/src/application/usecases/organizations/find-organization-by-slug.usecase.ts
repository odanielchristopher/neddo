import {
  Organization,
  OrganizationRole,
} from '@application/entities/organization.entity';
import { OrganizationsRepository } from '@infra/database/repositories/organizations.repository';
import { Injectable } from '@kernel/decorators';
import { NotFoundException } from '@kernel/exceptions';

@Injectable()
export class FindOrganizationBySlugUseCase {
  constructor(
    private readonly organizationsRepository: OrganizationsRepository,
  ) {}

  async execute({
    slug,
    userId,
  }: FindOrganizationBySlugUseCase.Input): Promise<FindOrganizationBySlugUseCase.Output> {
    const data = await this.organizationsRepository.findOrgBySlug({
      userId,
      slug,
    });

    if (!data) throw new NotFoundException('Organization not found.');

    return data as unknown as FindOrganizationBySlugUseCase.Output;
  }
}

export namespace FindOrganizationBySlugUseCase {
  export type Input = {
    slug: string;
    userId: string;
  };

  export type Output = {
    role: OrganizationRole;
    organization: Organization;
  };
}
