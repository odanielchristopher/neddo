import { FastifyPluginAsync } from 'fastify';

import { ListOrganizationUsersController } from '@application/controllers/organizations/list-organization-users.controller';
import { ListUserOrganizationsController } from '@application/controllers/organizations/list-user-organizations.controller';
import { middlewareAdapter } from '@server/adapters/middleware.adapter';
import { ValidatePermissionMiddleware } from '@server/middlewares/validate-permission.middleware';

export const organizationRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(ListOrganizationUsersController, {
    onRequest: [
      middlewareAdapter(new ValidatePermissionMiddleware(['ADMIN', 'OWNER'])),
    ],
  });
  fastify.adapter(ListUserOrganizationsController);
};
