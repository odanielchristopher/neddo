import { RouteHandler } from 'fastify';
import z from 'zod';

import { UnauthorizedException } from '@kernel/exceptions';

export function validateOrgPresenceMiddleware(): RouteHandler {
  return async (request) => {
    const organizationId = request.headers['x-org-id'];

    if (!organizationId || typeof organizationId !== 'string') {
      throw new UnauthorizedException('Organization id is missing.');
    }

    const { error } = z.string().uuid().safeParse(organizationId);

    if (error) {
      throw new UnauthorizedException('Organization id is not valid uuid');
    }
  };
}
