import { FastifyPluginAsync, RouteShorthandOptions } from 'fastify';

import { ExecutionContext } from '@kernel/context';
import { BaseController } from '@kernel/contracts';
import { Container } from '@kernel/di/container.di';
import { getControllerMetadata } from '@kernel/helpers';
import { Constructor } from '@shared/types';

const container = Container.getInstance();

export function routeAdapter(
  controller: Constructor<BaseController<any>>,
  options: RouteShorthandOptions = {},
): FastifyPluginAsync {
  const metadata = getControllerMetadata(controller);

  const { method, path = '/' } = metadata;

  if (!method) {
    throw new Error(
      `Not found in '${controller.name}' method metadata! Please, put '@{some http method}' decorator in class.`,
    );
  }

  // eslint-disable-next-line no-console
  console.log(`ROUTE > ${method.toUpperCase()} ${path} in ${controller.name}`);

  return async (fastify) => {
    fastify[method](path, options, async (request, reply) => {
      const userId = request.user?.sub;
      const organizationUser = request.organizationUser;
      const organization = request.organization;
      const organizationId = request.headers['x-org-id'] as string;

      return ExecutionContext.run(
        {
          userId,
          organizationId,
          organizationUser,
          organization,
          request,
          controller,
          handler: 'execute',
        },
        async () => {
          const instance = container.resolve(controller.name) as BaseController;

          const { code, body } = await instance.handler();
          return reply.code(code).send(body);
        },
      );
    });
  };
}
