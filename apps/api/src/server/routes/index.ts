import { FastifyPluginAsync, RouteShorthandOptions } from 'fastify';

import { JwtService } from '@infra/lib/jwt.service';
import { BaseController } from '@kernel/contracts';
import { Container } from '@kernel/di/container.di';
import { routeAdapter } from '@server/adapters/route.adapter';
import { Constructor } from '@shared/types';

import { privateRoutes } from './private';
import { publicRoutes } from './public';

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.decorate(
    'adapter',
    function (
      this: typeof fastify,
      controller: Constructor<BaseController>,
      options: RouteShorthandOptions = {},
    ) {
      const plugin = routeAdapter(controller, options);

      fastify.register(plugin);
    },
  );

  fastify.addHook('onRequest', async (request) => {
    const container = Container.getInstance();

    container.registerValue(JwtService, request.server.jwt);
  });

  fastify.register(privateRoutes);
  fastify.register(publicRoutes);
};
