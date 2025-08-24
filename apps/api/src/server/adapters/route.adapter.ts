import { FastifyPluginAsync } from 'fastify';

import { BaseController } from '@kernel/contracts';
import { Container } from '@kernel/di/container.di';
import { getControllerMetadata } from '@kernel/helpers';
import { Constructor } from '@shared/types';

export function routeAdapter(
  controller: Constructor<BaseController>,
): FastifyPluginAsync {
  const metadata = getControllerMetadata(controller);

  const { method, path = '/' } = metadata;

  if (!method) {
    throw new Error(
      `Not found in '${controller.name}' method metadata! Please, put '@{some http method}' decorator in class.`,
    );
  }

  return async (fastify) => {
    // eslint-disable-next-line no-console
    console.log(
      `ROUTE > ${method.toUpperCase()} ${path} in ${controller.name}`,
    );

    fastify[method](path, async (request, reply) => {
      const instance = Container.getInstance().resolve(
        controller.name,
      ) as BaseController;

      const { code, body } = await instance.handler({ request });

      return reply.code(code).send(body);
    });
  };
}
