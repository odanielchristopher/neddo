import { FastifyPluginAsync } from 'fastify';

import { ListOrganizationUsersController } from '@application/controllers/organizations/list-user-organizations.controller';
import { validateOrgPresenceMiddleware } from '@server/middlewares/validate-org-presence.middleware';

export const organizationRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(ListOrganizationUsersController, {
    onRequest: [validateOrgPresenceMiddleware()],
  });
};
