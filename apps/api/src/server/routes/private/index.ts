import { FastifyPluginAsync } from 'fastify';

import { Container } from '@kernel/di/container.di';
import { authenticationMiddleware } from '@server/middlewares/authentication.middleware';

import { organizationRoutes } from './organizations';

export const privateRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRequest', authenticationMiddleware);
  fastify.addHook('preHandler', async (request) => {
    const container = Container.getInstance();

    container.registerContext({
      organizationId: request.headers['x-org-id'] as string,
      userId: request.user.sub,
    });
  });

  fastify.register(organizationRoutes, { prefix: '/organizations' });
};
