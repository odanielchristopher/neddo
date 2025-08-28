import { FastifyPluginAsync } from 'fastify';

import { GetOwnDataController } from '@application/controllers/users/get-own-data.controller';

export const userRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(GetOwnDataController);
};
