import { FastifyRequest } from 'fastify';

import { IMiddleware } from '@kernel/contracts';
import { Injectable } from '@kernel/decorators';
import { UnauthorizedException } from '@kernel/exceptions';

@Injectable()
export class AuthenticationMiddleware extends IMiddleware {
  async execute(request: FastifyRequest) {
    try {
      await request.jwtVerify();

      const { type } = request.user;

      if (type !== 'DEFAULT') {
        throw new UnauthorizedException();
      }
    } catch {
      throw new UnauthorizedException('Invalid Access Token');
    }
  }
}
