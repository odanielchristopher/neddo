import { FastifyPluginAsync } from 'fastify';

import { authRoutes } from './auth';
import { uploadRoutes } from './uploads';

export const publicRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.register(authRoutes, { prefix: '/auth' });
  fastify.register(uploadRoutes, { prefix: '/uploads' });
};
