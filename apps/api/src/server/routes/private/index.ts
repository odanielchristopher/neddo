import { FastifyPluginAsync } from 'fastify';

import { authenticationMiddleware } from '@server/middlewares/authentication.middleware';

import { boardRoutes } from './boards';
import { organizationRoutes } from './organizations';
import { userRoutes } from './users';

export const privateRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRequest', authenticationMiddleware);

  fastify.register(organizationRoutes, { prefix: '/organizations' });
  fastify.register(boardRoutes, { prefix: '/boards' });
  fastify.register(userRoutes, { prefix: '/users' });
};
