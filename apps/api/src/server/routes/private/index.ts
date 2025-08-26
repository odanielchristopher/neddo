import { FastifyPluginAsync } from 'fastify';

import { authenticationMiddleware } from '@server/middlewares/authentication.middleware';

import { organizationRoutes } from './organizations';

export const privateRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRequest', authenticationMiddleware);

  fastify.register(organizationRoutes, { prefix: '/organizations' });
};
