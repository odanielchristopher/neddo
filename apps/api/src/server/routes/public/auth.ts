import { FastifyPluginAsync } from 'fastify';

import { ConfirmForgotPasswordController } from '@application/controllers/auth/confirm-forgot-password.controller';
import { ForgotPasswordController } from '@application/controllers/auth/forgot-password.controller';
import { RefreshTokenController } from '@application/controllers/auth/refresh-token.controller';
import { ResetPasswordController } from '@application/controllers/auth/reset-password.controller';
import { SignInController } from '@application/controllers/auth/sign-in.controller';
import { SignUpController } from '@application/controllers/auth/sign-up.controller';
import { middlewareAdapter } from '@server/adapters/middleware.adapter';
import { AuthenticateResetPasswordTokenMiddleware } from '@server/middlewares/authenticate-reset-password-token.middleware';

export const authRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.adapter(SignUpController);
  fastify.adapter(SignInController);
  fastify.adapter(RefreshTokenController);
  fastify.adapter(ForgotPasswordController);
  fastify.adapter(ConfirmForgotPasswordController);
  fastify.adapter(ResetPasswordController, {
    onRequest: [middlewareAdapter(AuthenticateResetPasswordTokenMiddleware)],
  });
};
