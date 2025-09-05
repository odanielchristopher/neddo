import { FastifyPluginAsync } from 'fastify';

import { GetPresignedUrlController } from '@application/controllers/uploads/get-presigned-url.controller';

export const uploadRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(GetPresignedUrlController);
};
