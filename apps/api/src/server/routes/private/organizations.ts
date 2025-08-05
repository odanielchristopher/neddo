import { FastifyPluginAsync } from 'fastify';

import { ListOrgUsersController } from '../../../application/controllers/organizations/ListOrgUserController';
import { ListUserOrgsController } from '../../../application/controllers/organizations/ListUserOrgsController';
import { validatePermissionMiddleware } from '../../middlewares/validatePermissionMiddleware';

export const organizationRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.registerController(ListOrgUsersController, {
    onRequest: [validatePermissionMiddleware(['OWNER', 'ADMIN'])],
  });

  fastify.registerController(ListUserOrgsController);
};
