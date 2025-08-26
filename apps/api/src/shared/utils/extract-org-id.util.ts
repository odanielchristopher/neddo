import { FastifyRequest } from 'fastify';

import { UnauthorizedException } from '@kernel/exceptions';

export function extractOrganizationId(request: FastifyRequest): string {
  const organizationId = request.headers['x-org-id'];

  if (typeof organizationId !== 'string') {
    throw new UnauthorizedException('Organization Id is missing!');
  }

  return organizationId;
}
