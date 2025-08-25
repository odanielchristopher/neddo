/* eslint-disable no-duplicate-imports */
/* eslint-disable @typescript-eslint/naming-convention */
import 'fastify';

import { RouteShorthandOptions } from 'fastify';

import { BaseController } from '@kernel/contracts';
import { Constructor } from '@shared/types';
import { OrganizationRole } from 'generated/prisma';

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
