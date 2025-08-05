import { FastifyPluginAsync } from 'fastify';

import { SignInController } from '../../../application/controllers/auth/SignInController';
import { SignUpController } from '../../../application/controllers/auth/SignUpController';

export const authRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.registerController(SignUpController);
  fastify.registerController(SignInController);
};
