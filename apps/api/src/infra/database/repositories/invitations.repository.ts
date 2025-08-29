import { Prisma } from '@prisma/client';

import { Injectable } from '@kernel/decorators';

import { PrismaService } from '../prisma.service';

@Injectable()
export class InvitationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.InvitationFindManyArgs) {
    return this.prismaService.invitation.findMany(findManyDto);
  }

  findUnique(findUniqueDto: Prisma.InvitationFindUniqueArgs) {
    return this.prismaService.invitation.findUnique(findUniqueDto);
  }

  findFirst(findFirstDto: Prisma.InvitationFindFirstArgs) {
    return this.prismaService.invitation.findFirst(findFirstDto);
  }

  create(createInvitationDto: Prisma.InvitationCreateArgs) {
    return this.prismaService.invitation.create(createInvitationDto);
  }

  update(updateInvitationDto: Prisma.InvitationUpdateArgs) {
    return this.prismaService.invitation.update(updateInvitationDto);
  }

  delete(deleteInvitationDto: Prisma.InvitationDeleteArgs) {
    return this.prismaService.invitation.delete(deleteInvitationDto);
  }

  count(countInvitationDto: Prisma.InvitationCountArgs) {
    return this.prismaService.invitation.count(countInvitationDto);
  }

  upsert(upsertInvitationDto: Prisma.InvitationUpsertArgs) {
    return this.prismaService.invitation.upsert(upsertInvitationDto);
  }
}
