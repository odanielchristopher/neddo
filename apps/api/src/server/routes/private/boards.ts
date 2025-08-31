import { FastifyPluginAsync } from 'fastify';

import { CreateBoardController } from '@application/controllers/boards/create-board.controller';
import { middlewareAdapter } from '@server/adapters/middleware.adapter';
import { ValidatePermissionMiddleware } from '@server/middlewares/validate-permission.middleware';

export const boardRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(CreateBoardController, {
    onRequest: [
      middlewareAdapter(new ValidatePermissionMiddleware(['OWNER', 'ADMIN'])),
    ],
  });
};
