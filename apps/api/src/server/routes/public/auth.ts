import { FastifyPluginAsync } from 'fastify';

import { SignInController } from '@application/controllers/auth/sign-in.controller';
import { SignUpController } from '@application/controllers/auth/sign-up.controller';

export const authRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(SignUpController);
  fastify.adapter(SignInController);
};
