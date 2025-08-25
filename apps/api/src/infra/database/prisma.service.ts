import { PrismaClient } from '@prisma/client';

import { Injectable } from '@kernel/decorators';

@Injectable()
export class PrismaService extends PrismaClient {
  private readonly db = new PrismaClient();

  constructor() {
    super();
    this.db.$connect();
  }
}
