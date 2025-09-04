import { FastifyPluginAsync } from 'fastify';

import { InviteUserController } from '@application/controllers/invites/invite-user.controller';
import { middlewareAdapter } from '@server/adapters/middleware.adapter';
import { ValidatePermissionMiddleware } from '@server/middlewares/validate-permission.middleware';

export const invitationRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(InviteUserController, {
    onRequest: [middlewareAdapter(new ValidatePermissionMiddleware(['OWNER']))],
  });
};
