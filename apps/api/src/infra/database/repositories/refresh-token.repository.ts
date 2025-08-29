import { Prisma } from '@prisma/client';

import { Injectable } from '@kernel/decorators';

import { PrismaService } from '../prisma.service';

@Injectable()
export class RefreshTokensRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.RefreshTokenFindManyArgs) {
    return this.prismaService.refreshToken.findMany(findManyDto);
  }

  findUnique(findUniqueDto: Prisma.RefreshTokenFindUniqueArgs) {
    return this.prismaService.refreshToken.findUnique(findUniqueDto);
  }

  findFirst(findFirstDto: Prisma.RefreshTokenFindFirstArgs) {
    return this.prismaService.refreshToken.findFirst(findFirstDto);
  }

  create(createRefreshTokenDto: Prisma.RefreshTokenCreateArgs) {
    return this.prismaService.refreshToken.create(createRefreshTokenDto);
  }

  count(countRefreshTokenDto: Prisma.RefreshTokenCountArgs) {
    return this.prismaService.refreshToken.count(countRefreshTokenDto);
  }

  upsert(upsertRefreshTokenDto: Prisma.RefreshTokenUpsertArgs) {
    return this.prismaService.refreshToken.upsert(upsertRefreshTokenDto);
  }

  delete(deleteRefreshTokenDto: Prisma.RefreshTokenDeleteArgs) {
    return this.prismaService.refreshToken.delete(deleteRefreshTokenDto);
  }

  deleteMany(deleteManyRefreshTokenDto: Prisma.RefreshTokenDeleteManyArgs) {
    return this.prismaService.refreshToken.deleteMany(
      deleteManyRefreshTokenDto,
    );
  }
}
