import { FastifyPluginAsync } from 'fastify';

import { IController } from '../../application/contracts/IController';
import { getControllerMetadata } from '../../kernel/decorators/Controller';
import { Container } from '../../kernel/di/Container';
import { Constructor, Middleware } from '../../shared/types';

type Options = { onRequest?: Middleware[] };

export function createRoute(
  controller: Constructor<IController>,
  options?: Options,
): FastifyPluginAsync {
  const metadata = getControllerMetadata(controller);
  if (!metadata) {
    throw new Error(
      `Not found '${controller.name}' metadata! Please, put @Controller decorator in class.`,
    );
  }
  const { http, path = '/' } = metadata;

  return async (fastify) => {
    fastify[http](path, { ...options }, async (request, reply) => {
      const container = Container.getInstance();

      const instance = container.resolve(controller.name) as IController;

      return instance.handler(request, reply);
    });
  };
}
