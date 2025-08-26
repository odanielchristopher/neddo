import { Prisma } from '@prisma/client';

import { Injectable } from '@kernel/decorators';

import { PrismaService } from '../prisma.service';

@Injectable()
export class OrganizationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.OrganizationFindManyArgs) {
    return this.prismaService.organization.findMany(findManyDto);
  }

  findUnique(findUniqueDto: Prisma.OrganizationFindUniqueArgs) {
    return this.prismaService.organization.findUnique(findUniqueDto);
  }

  create(createOrganizationDto: Prisma.OrganizationCreateArgs) {
    return this.prismaService.organization.create(createOrganizationDto);
  }
}
