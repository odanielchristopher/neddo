import { Prisma } from '@prisma/client';

import { Injectable } from '@kernel/decorators';

import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.UserFindManyArgs) {
    return this.prismaService.user.findMany(findManyDto);
  }

  findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(findUniqueDto);
  }

  create(createUserDto: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createUserDto);
  }

  update(updateUserDto: Prisma.UserUpdateArgs) {
    return this.prismaService.user.update(updateUserDto);
  }

  delete(deleteUserDto: Prisma.UserDeleteArgs) {
    return this.prismaService.user.delete(deleteUserDto);
  }

  count(countUserDto: Prisma.UserCountArgs) {
    return this.prismaService.user.count(countUserDto);
  }
}
