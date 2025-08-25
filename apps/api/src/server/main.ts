/* eslint-disable no-console */
import FastifyCors from '@fastify/cors';
import FastifyJwt from '@fastify/jwt';
import Fastify from 'fastify';
import { ZodError } from 'zod';

import {
  ApplicationException,
  ErrorCode,
  HttpException,
} from '@kernel/exceptions';
import { httpErrorResponse } from '@kernel/utils/http-error-response';

import { routes } from './routes';

const fastify = Fastify();
fastify.register(FastifyCors);
fastify.register(FastifyJwt, {
  secret: process.env.JWT_SECRET!,
  sign: {
    expiresIn: '5h',
  },
});

fastify.register(routes);

fastify.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.code(400).send(
      httpErrorResponse({
        code: ErrorCode.BAD_REQUEST,
        message: error.issues.map((issue) => ({
          field: issue.path?.join('.'),
          message: issue.message,
        })),
      }),
    );
  }

  if (error instanceof HttpException) {
    reply.status(error.statusCode).send(httpErrorResponse(error));
    return;
  }

  if (error instanceof ApplicationException) {
    reply.status(error.statusCode ?? 400).send(httpErrorResponse(error));
    return;
  }

  console.error('Internal server error:', error);
  reply.status(500).send(
    httpErrorResponse({
      code: ErrorCode.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    }),
  );
});

export function bootstrap() {
  fastify
    .listen({ port: 3001 })
    .then(() => console.log('> Server started at http://localhost:3001'))
    .catch((error) => console.log(error));
}
