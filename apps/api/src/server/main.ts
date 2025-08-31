/* eslint-disable no-console */
import 'dotenv/config';
import path from 'node:path';

import FastifyCors from '@fastify/cors';
import FastifyJwt from '@fastify/jwt';
import FastifyStatic from '@fastify/static';
import Fastify from 'fastify';
import { ZodError } from 'zod';

import { JwtService } from '@infra/lib/jwt.service';
import { Container } from '@kernel/di/container.di';
import {
  ApplicationException,
  ErrorCode,
  HttpException,
} from '@kernel/exceptions';
import { httpErrorResponse, IHttpErrorResponseParams } from '@kernel/utils';
import { env } from '@shared/config';
import { isFastifyError } from '@shared/utils';

import { routes } from './routes';

const fastify = Fastify();
fastify.register(FastifyCors);
fastify.register(FastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '5h',
  },
});

fastify.register(FastifyStatic, {
  root: path.join(__dirname, '..', '..', '..', 'public'),
  prefix: '/public',
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

  if (isFastifyError(error)) {
    return reply
      .status(error.statusCode ?? 400)
      .send(httpErrorResponse(error as IHttpErrorResponseParams));
  }

  console.error('Internal server error:', error);
  reply.status(500).send(
    httpErrorResponse({
      code: ErrorCode.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    }),
  );
});

fastify.addHook('onReady', async () => {
  const container = Container.getInstance();

  container.registerValue(JwtService, fastify.jwt);
});

export default fastify;
