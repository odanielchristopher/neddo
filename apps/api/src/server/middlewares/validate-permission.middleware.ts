import { OrganizationRole } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';

import { PrismaService } from '@infra/database/prisma.service';
import { IMiddleware } from '@kernel/contracts';
import { Injectable } from '@kernel/decorators';
import { Container } from '@kernel/di/container.di';

@Injectable()
export class ValidatePermissionMiddleware extends IMiddleware {
  constructor(private readonly requiredRoles: OrganizationRole[]) {
    super();
  }

  async execute(request: FastifyRequest, reply: FastifyReply) {
    try {
      const organizationId = request.headers['x-org-id'];

      if (!organizationId || typeof organizationId !== 'string') {
        return reply.status(403).send({ error: 'Organization Id is missing.' });
      }

      const { sub } = request.user;

      const db = Container.getInstance().resolve<typeof PrismaService>(
        PrismaService.name,
      );

      const organizationUser = await db.organizationUser.findUnique({
        where: {
          userId_organizationId: {
            organizationId,
            userId: sub,
          },
        },
        select: {
          organizationId: true,
          userId: true,
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

      if (
        !organizationUser ||
        (this.requiredRoles &&
          !this.requiredRoles.includes(organizationUser.role))
      ) {
        return reply
          .status(403)
          .send({ error: "You don't have enough permissions." });
      }

      request.organizationUser = {
        organizationId,
        role: organizationUser.role,
        userId: sub,
      };
      request.organization = organizationUser.organization;
    } catch {
      return reply
        .status(403)
        .send({ error: "You don't have enough permissions." });
    }
  }
}
