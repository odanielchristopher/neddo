import { FastifyPluginAsync } from 'fastify';

import { InviteUserController } from '@application/controllers/invites/invite-user.controller';

export const invitationRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(InviteUserController);
};
