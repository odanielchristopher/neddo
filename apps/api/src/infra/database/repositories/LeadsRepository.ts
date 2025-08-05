import { PrismaClient } from '../../../../generated/prisma';
import { Inject } from '../../../kernel/decorators/Inject';
import { Injectable } from '../../../kernel/decorators/Injectable';

type CreateLeadParams = {
  name: string;
  email: string;
  phone: string;
};

@Injectable()
export class LeadsRepository {
  constructor(
    @Inject('organizationId') private readonly organizationId: string,
    @Inject('db') private readonly db: PrismaClient,
  ) {}

  findAll() {
    return this.db.leads.findMany({
      where: { organizationId: this.organizationId },
    });
  }

  create({ name, email, phone }: CreateLeadParams) {
    return this.db.leads.create({
      data: {
        name,
        email,
        phone,
        organizationId: this.organizationId,
      },
    });
  }
}
