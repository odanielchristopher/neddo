import 'fastify';

import { IController } from '../../application/contracts/IController';
import { OrganizationRole } from '../../generated/prisma';
import { Constructor, Middleware } from '../../shared/types';

declare module 'fastify' {
  interface FastifyRequest {
    organizationUser: {
      userId: string;
      organizationId: string;
      role: OrganizationRole;
    };
  }

  interface FastifyInstance {
    registerController(
      controller: Constructor<IController>,
      options?: { onRequest: Middleware[] },
    ): void;
  }
}
