/* eslint-disable @typescript-eslint/naming-convention */
import 'fastify';

import { OrganizationRole } from '@prisma/client';

import { Organization } from '@application/entities/organization.entity';
import { IController } from '@kernel/contracts';
import { Constructor } from '@shared/types';

declare module 'fastify' {
  interface FastifyRequest {
    organizationUser: {
      userId: string;
      organizationId: string;
      role: OrganizationRole;
    };
    organization: Organization;
  }

  interface FastifyInstance {
    adapter(
      controller: Constructor<IController<any>>,
      options?: RouteShorthandOptions,
    ): void;
  }

  interface RouteShorthandOptions {
    controller?: string;
  }
}
