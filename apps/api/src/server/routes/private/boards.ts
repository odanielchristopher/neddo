import { FastifyPluginAsync } from 'fastify';

import { CreateBoardController } from '@application/controllers/boards/create-board.controller';
import { validatePermissionMiddleware } from '@server/middlewares/validate-permission.middleware';

export const boardRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(CreateBoardController, {
    onRequest: [validatePermissionMiddleware(['OWNER', 'ADMIN'])],
  });
};
