import { FastifyPluginAsync } from 'fastify';

import { ListOrganizationUsersController } from '@application/controllers/organizations/list-organization-users.controller';
import { ListUserOrganizationsController } from '@application/controllers/organizations/list-user-organizations.controller';
import { validatePermissionMiddleware } from '@server/middlewares/validate-permission.middleware';

export const organizationRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(ListOrganizationUsersController, {
    onRequest: [validatePermissionMiddleware(['ADMIN', 'OWNER'])],
  });
  fastify.adapter(ListUserOrganizationsController);
};
