import { FastifyPluginAsync } from 'fastify';

export const privateRoutes: FastifyPluginAsync = async (fastify) => {
  // fastify.addHook('onRequest', authenticationMiddleware);
  // fastify.register(organizationRoutes, { prefix: '/organizations' });
};
