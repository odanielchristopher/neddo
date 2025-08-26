import { PrismaClient } from '@prisma/client';

import { Injectable } from '@kernel/decorators';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();
    this.$connect();
  }
}
