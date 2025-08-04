import 'dotenv/config';
import 'reflect-metadata';

import FastifyCors from '@fastify/cors';
import FastifyJwt from '@fastify/jwt';
import Fastify from 'fastify';
import FastifySocketIO from 'fastify-socket.io';

import { ZodError } from 'zod';

const fastify = Fastify();

fastify.register(FastifyCors);
fastify.register(FastifySocketIO);
fastify.register(FastifyJwt, {
  secret: process.env.JWT_SECRET!,
  sign: {
    expiresIn: '5h',
  }
});

fastify.get('/', () => {
  return 'Hello from neddo';
});

fastify.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.code(400).send({
      error: error.issues.map(issue => ({
        field: issue.path?.join('.'),
        message: issue.message,
      })),
    });
  }

  console.log(error);
  return reply.code(500).send({ error: 'Internal Server Error' });
});

fastify
  .listen({ port: 3001 })
  .then(() => console.log('> Server started at http://localhost:3001'));
