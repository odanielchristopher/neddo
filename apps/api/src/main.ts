/* eslint-disable no-console */
import 'dotenv/config';
import 'reflect-metadata';

import { SocketProvider } from '@infra/providers/socket.provider';
import { Container } from '@kernel/di/container.di';
import fastify from '@server/main';

export async function bootstrap() {
  const httpServer = fastify.server;

  const socketProvider = Container.getInstance().resolve<typeof SocketProvider>(
    SocketProvider.name,
  );
  socketProvider.init(httpServer);

  fastify.listen({ port: 3001 }, () =>
    console.log('> Server started at http://localhost:3001'),
  );
}

bootstrap();
