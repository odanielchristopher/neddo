import { FastifyPluginAsync } from 'fastify';

import { CreateLeadController } from '../../../application/controllers/leads/CreateLeadController';
import { ListLeadsController } from '../../../application/controllers/leads/ListLeadsController';
import { validatePermissionMiddleware } from '../../middlewares/validatePermissionMiddleware';

export const leadsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRequest', validatePermissionMiddleware(['OWNER']));

  fastify.registerController(ListLeadsController);

  fastify.registerController(CreateLeadController, {
    onRequest: [validatePermissionMiddleware(['ADMIN', 'OWNER'])],
  });
};
