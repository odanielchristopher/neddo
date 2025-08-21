import { FastifyPluginAsync } from 'fastify';

import { authenticationMiddleware } from '../../middlewares/authenticationMiddleware';

import { leadsRoutes } from './leads';
import { organizationRoutes } from './organizations';

export const privateRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRequest', authenticationMiddleware);

  fastify.register(leadsRoutes, { prefix: '/leads' });
  fastify.register(organizationRoutes, { prefix: '/organizations' });
};
