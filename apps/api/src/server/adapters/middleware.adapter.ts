import { FastifyReply, FastifyRequest } from 'fastify';

import { IMiddleware } from '@kernel/contracts';
import { Container } from '@kernel/di/container.di';
import { Constructor } from '@shared/types';

export function middlewareAdapter(
  middleware: Constructor<IMiddleware> | InstanceType<typeof IMiddleware>,
) {
  const container = Container.getInstance();

  const instance =
    middleware instanceof IMiddleware
      ? middleware
      : container.resolve<typeof middleware>(middleware.name);

  return async (request: FastifyRequest, reply: FastifyReply) => {
    await instance.execute(request, reply);
  };
}
