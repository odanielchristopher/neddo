import { Prisma } from '@prisma/client';

import { Injectable } from '@kernel/decorators';

import { PrismaService } from '../prisma.service';

@Injectable()
export class ForgotPasswordCodesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.ForgotPasswordCodeFindManyArgs) {
    return this.prismaService.forgotPasswordCode.findMany(findManyDto);
  }

  findUnique(findUniqueDto: Prisma.ForgotPasswordCodeFindUniqueArgs) {
    return this.prismaService.forgotPasswordCode.findUnique(findUniqueDto);
  }

  findFirst(findFirstDto: Prisma.ForgotPasswordCodeFindFirstArgs) {
    return this.prismaService.forgotPasswordCode.findFirst(findFirstDto);
  }

  create(createForgotPasswordCodeDto: Prisma.ForgotPasswordCodeCreateArgs) {
    return this.prismaService.forgotPasswordCode.create(
      createForgotPasswordCodeDto,
    );
  }

  update(updateForgotPasswordCodeDto: Prisma.ForgotPasswordCodeUpdateArgs) {
    return this.prismaService.forgotPasswordCode.update(
      updateForgotPasswordCodeDto,
    );
  }

  delete(deleteForgotPasswordCodeDto: Prisma.ForgotPasswordCodeDeleteArgs) {
    return this.prismaService.forgotPasswordCode.delete(
      deleteForgotPasswordCodeDto,
    );
  }

  count(countForgotPasswordCodeDto: Prisma.ForgotPasswordCodeCountArgs) {
    return this.prismaService.forgotPasswordCode.count(
      countForgotPasswordCodeDto,
    );
  }

  upsert(upsertForgotPasswordCodeDto: Prisma.ForgotPasswordCodeUpsertArgs) {
    return this.prismaService.forgotPasswordCode.upsert(
      upsertForgotPasswordCodeDto,
    );
  }
}
