import { FastifyPluginAsync } from 'fastify';

import { authenticationMiddleware } from '@server/middlewares/authentication.middleware';

import { boardRoutes } from './boards';
import { organizationRoutes } from './organizations';

export const privateRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRequest', authenticationMiddleware);

  fastify.register(organizationRoutes, { prefix: '/organizations' });
  fastify.register(boardRoutes, { prefix: '/boards' });
};
