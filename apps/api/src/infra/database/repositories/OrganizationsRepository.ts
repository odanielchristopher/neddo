import { Inject } from '../../../kernel/decorators/Inject';
import { Injectable } from '../../../kernel/decorators/Injectable';
import { db } from '../../lib/db';

@Injectable()
export class OrganizationsRepository {
  constructor(
    @Inject('organizationId') private readonly organizationId?: string,
  ) {}

  findOrgUsers() {
    if (!this.organizationId) {
      throw new Error('Organization not found.');
    }

    return db.organizationUser.findMany({
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

  findOrgsByUserId(userId: string) {
    return db.organizationUser.findMany({
      where: { userId },
      select: {
        role: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }
}
