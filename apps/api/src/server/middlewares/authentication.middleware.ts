import { FastifyRequest } from 'fastify';

import { UnauthorizedException } from '@kernel/exceptions';

export async function authenticationMiddleware(request: FastifyRequest) {
  try {
    await request.jwtVerify();
  } catch {
    throw new UnauthorizedException('Invalid Access Token');
  }
}
