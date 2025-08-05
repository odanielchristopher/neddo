import { FastifyRequest, type RawServerDefault } from 'fastify';
import { Server } from 'socket.io';

import { PrismaClient } from '../../../generated/prisma';
import { Inject, Injectable } from '../../kernel/decorators';
import { Container } from '../../kernel/di/Container';

@Injectable({ scope: 'singleton' })
export class WebSocketGateway {
  private io: Server;

  constructor(@Inject('server') server: RawServerDefault) {
    this.io = new Server(server, {
      cors: { origin: '*' },
      transports: ['websocket'],
    });
  }

  public emitToOrganization(organizationId: string, event: string, data: any) {
    this.io.emit(`${event}:${organizationId}`, data);
  }

  public async emitWithValidation(
    event: string,
    data: any,
    request: FastifyRequest,
  ) {
    const organizationId = request.organizationUser?.organizationId;

    if (!organizationId) {
      throw new Error('Organization ID not available in request context');
    }

    const db = Container.getInstance().resolve<typeof PrismaClient>('db');

    const isMember = await db.organizationUser.findUnique({
      where: {
        userId_organizationId: {
          organizationId,
          userId: request.user.sub,
        },
      },
    });

    if (!isMember) {
      throw new Error('User no longer has access to this organization');
    }

    this.emitToOrganization(organizationId, event, data);
  }
}
