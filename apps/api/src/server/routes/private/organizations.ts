import { FastifyPluginAsync } from 'fastify';

import { ListUserOrganizationsController } from '@application/controllers/organizations/list-user-organizations.controller';

export const organizationRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(ListUserOrganizationsController);
};
