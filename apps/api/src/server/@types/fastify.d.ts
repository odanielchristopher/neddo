/* eslint-disable no-duplicate-imports */
/* eslint-disable @typescript-eslint/naming-convention */
import 'fastify';

import { OrganizationRole } from '@prisma/client';
import { RouteShorthandOptions } from 'fastify';

import { BaseController } from '@kernel/contracts';
import { Constructor } from '@shared/types';

declare module 'fastify' {
  interface FastifyRequest {
    organizationUser: {
      userId: string;
      organizationId: string;
      role: OrganizationRole;
    };
  }

  interface FastifyInstance {
    adapter(
      controller: Constructor<BaseController<any>>,
      options?: RouteShorthandOptions,
    ): void;
  }
}
