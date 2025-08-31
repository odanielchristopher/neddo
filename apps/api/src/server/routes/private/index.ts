import { FastifyPluginAsync } from 'fastify';

import { middlewareAdapter } from '@server/adapters/middleware.adapter';
import { AuthenticationMiddleware } from '@server/middlewares/authentication.middleware';

import { boardRoutes } from './boards';
import { invitationRoutes } from './invitations';
import { organizationRoutes } from './organizations';
import { userRoutes } from './users';

export const privateRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRequest', middlewareAdapter(AuthenticationMiddleware));

  fastify.register(organizationRoutes, { prefix: '/organizations' });
  fastify.register(boardRoutes, { prefix: '/boards' });
  fastify.register(userRoutes, { prefix: '/users' });
  fastify.register(invitationRoutes, { prefix: '/invitations' });
};
