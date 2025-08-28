import { FastifyRequest } from 'fastify';

import { UnauthorizedException } from '@kernel/exceptions';
import { createParamDecorator } from '@kernel/utils';

export const ActiveUserId = createParamDecorator<undefined, string>(
  (_data, context) => {
    const request: FastifyRequest = context.request;

    const userId = request.user.sub;

    if (!userId) {
      throw new UnauthorizedException('User id not found.');
    }

    return userId;
  },
);
