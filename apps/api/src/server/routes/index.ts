import { FastifyPluginAsync } from 'fastify';

import { BaseController } from '@kernel/contracts';
import { routeAdapter } from '@server/adapters/route.adapter';
import { Constructor } from '@shared/types';

import { privateRoutes } from './private';
import { publicRoutes } from './public';

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.decorate(
    'controller',
    function (this: typeof fastify, controller: Constructor<BaseController>) {
      const route = routeAdapter(controller);

      fastify.register(route);
    },
  );

  fastify.register(privateRoutes);
  fastify.register(publicRoutes);
};
