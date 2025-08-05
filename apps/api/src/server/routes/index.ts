import { FastifyPluginAsync } from 'fastify';

import { IController } from '../../application/contracts/IController';
import { Container } from '../../kernel/di/Container';
import { Constructor, Middleware } from '../../shared/types';
import { createRoute } from '../adapters/createRoute';
import { createRequestContext } from '../middlewares/createRequestContext';
import { privateRoutes } from './private';
import { publicRoutes } from './public';

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.decorate(
    'registerController',
    function (
      this: typeof fastify,
      controller: Constructor<IController>,
      options?: { onRequest?: Middleware[] },
    ) {
      const routePlugin = createRoute(controller, options);
      fastify.register(routePlugin);
    },
  );

  fastify.addHook('onRequest', createRequestContext);
  fastify.addHook('onResponse', (_req, _reply, done) => {
    Container.getInstance().clearContext();
    done();
  });

  fastify.register(publicRoutes);
  fastify.register(privateRoutes);
};
