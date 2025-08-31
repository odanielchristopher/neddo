import { FastifyPluginAsync, RouteShorthandOptions } from 'fastify';

import { IController } from '@kernel/contracts';
import { routeAdapter } from '@server/adapters/route.adapter';
import { Constructor } from '@shared/types';

import { privateRoutes } from './private';
import { publicRoutes } from './public';

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.decorate(
    'adapter',
    function (
      this: typeof fastify,
      controller: Constructor<IController>,
      options: RouteShorthandOptions = {},
    ) {
      const plugin = routeAdapter(controller, options);

      fastify.register(plugin);
    },
  );

  fastify.register(publicRoutes);
  fastify.register(privateRoutes);
};
