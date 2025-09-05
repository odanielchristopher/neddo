import { Injectable, OptionalInject } from '@kernel/decorators';

import { PrismaService } from '../prisma.service';

@Injectable({
  scope: 'request',
})
export class OrganizationsRepository {
  constructor(
    private readonly prismaService: PrismaService,
    @OptionalInject('organizationId')
    private readonly organizationId?: string,
  ) {}

  findOrgUsers() {
    if (!this.organizationId) {
      throw new Error('Organization id not found.');
    }

    return this.prismaService.organizationUser.findMany({
      where: { organizationId: this.organizationId },
      select: {
        role: true,
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
  }

  findOrgBySlug({ slug, userId }: { slug: string; userId: string }) {
    return this.prismaService.organizationUser.findFirst({
      where: {
        userId,
        organization: {
          slug,
        },
      },
      select: {
        role: true,
        organization: {
          select: {
            id: true,
            name: true,
            slug: true,
            avatarPath: true,
          },
        },
      },
    });
  }

  findOrgsByUserId(userId: string) {
    return this.prismaService.organizationUser.findMany({
      where: { userId },
      select: {
        role: true,
        organization: {
          select: {
            id: true,
            name: true,
            avatarPath: true,
            slug: true,
          },
        },
      },
    });
  }

  findOrgByName(name: string) {
    return this.prismaService.organization.findUnique({
      where: { name },
    });
  }
}
