import { FastifyRequest } from 'fastify';

import { UnauthorizedException } from '@kernel/exceptions';

export async function authenticateResetPasswordTokenMiddleware(
  request: FastifyRequest,
) {
  try {
    await request.jwtVerify();

    const type = request.user.type;

    if (type !== 'RESET') {
      throw new UnauthorizedException();
    }
  } catch {
    throw new UnauthorizedException('Invalid Access Token');
  }
}
