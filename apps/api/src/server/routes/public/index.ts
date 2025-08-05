import { FastifyPluginAsync } from 'fastify';
import { authRoutes } from './auth';

export const publicRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.register(authRoutes, { prefix: '/auth' });
};
