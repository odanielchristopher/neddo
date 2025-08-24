import { FastifyPluginAsync } from 'fastify';

import { SignInController } from '@application/controllers/auth/sign-in.controller';

export const authRoutes: FastifyPluginAsync = async (fastify) => {
  // fastify.registerController(SignUpController);
  fastify.controller(SignInController);
};
