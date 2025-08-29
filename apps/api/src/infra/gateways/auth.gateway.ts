import { randomInt } from 'node:crypto';

import { SignOptions } from '@fastify/jwt';

import { ForgotPasswordCodesRepository } from '@infra/database/repositories/forgot-password-code.repository';
import { RefreshTokensRepository } from '@infra/database/repositories/refresh-token.repository';
import ForgotPassword from '@infra/email/templates/forgot-password.template';
import { JwtService } from '@infra/lib/jwt.service';
import { Inject, Injectable } from '@kernel/decorators';
import {
  InvalidRefreshTokenException,
  UnauthorizedException,
} from '@kernel/exceptions';
import {
  EXP_FORGOT_PASS_CODE_TIME_IN_MINUTES,
  EXP_REFRESH_TOKEN_TIME_IN_DAYS,
} from '@shared/constants';

import { MailGateway } from './mail.gateway';

@Injectable()
export class AuthGateway {
  constructor(
    @Inject(JwtService)
    private readonly jwtService: JwtService,
    private readonly mailGateway: MailGateway,
    private readonly forgotPasswordCodesRepository: ForgotPasswordCodesRepository,
    private readonly refreshTokensRepository: RefreshTokensRepository,
  ) {}

  async refreshToken({
    refreshToken: refreshTokenId,
  }: AuthGateway.RefreshTokenInput): Promise<AuthGateway.RefreshTokenOutput> {
    const refreshToken = await this.refreshTokensRepository.findUnique({
      where: { id: refreshTokenId },
    });

    if (!refreshToken) {
      throw new InvalidRefreshTokenException();
    }

    if (Date.now() > refreshToken.expiresAt.getTime()) {
      await this.refreshTokensRepository.delete({
        where: { id: refreshTokenId },
      });

      throw new InvalidRefreshTokenException();
    }

    const newRefreshToken = await this.generateRefreshToken(
      refreshToken.userId,
    );

    const [accessToken] = await Promise.all([
      this.generateAccessToken(refreshToken.userId),
      this.refreshTokensRepository.delete({ where: { id: refreshTokenId } }),
    ]);

    return {
      accessToken,
      refreshToken: newRefreshToken.id,
    };
  }

  async forgotPassword({
    userId,
    email,
  }: AuthGateway.ForgotPasswordInput): Promise<AuthGateway.ForgotPasswordOutput> {
    const { code } = await this.generateForgotPasswordCode(userId);

    await this.mailGateway.send({
      subject: 'Recuperação de conta',
      to: email,
      template: ForgotPassword({ confirmationCode: code }),
    });
  }

  async confirmForgotPassword({
    code,
  }: AuthGateway.ConfirmForgotPasswordInput): Promise<AuthGateway.ConfirmForgotPasswordOutput> {
    const confirmationCode = await this.forgotPasswordCodesRepository.findFirst(
      {
        where: { code },
      },
    );

    if (!confirmationCode) {
      throw new UnauthorizedException('Invalid code!');
    }

    if (Date.now() > confirmationCode.expiresAt.getTime()) {
      await this.forgotPasswordCodesRepository.delete({
        where: {
          id: confirmationCode.id,
        },
      });

      throw new UnauthorizedException('Expired code!');
    }

    const resetPasswordToken = this.jwtService.sign(
      {
        sub: confirmationCode.userId,
        type: 'RESET',
      },
      {
        expiresIn: '15m',
      },
    );

    await this.forgotPasswordCodesRepository.delete({
      where: { id: confirmationCode.id },
    });

    return {
      resetPasswordToken,
    };
  }

  async generateRefreshToken(userId: string) {
    const expiresAt = new Date();

    expiresAt.setDate(expiresAt.getDate() + EXP_REFRESH_TOKEN_TIME_IN_DAYS);

    const refreshToken = await this.refreshTokensRepository.create({
      data: {
        userId,
        expiresAt,
      },
    });

    return refreshToken;
  }

  async resetRefreshTokens({
    userId,
  }: AuthGateway.ResetRefreshTokenInput): Promise<AuthGateway.ResetRefreshTokenOutput> {
    await this.refreshTokensRepository.deleteMany({
      where: { userId },
    });
  }

  generateAccessToken(sub: string, options?: Partial<SignOptions>) {
    return this.jwtService.sign(
      {
        sub,
        type: 'DEFAULT',
      },
      options,
    );
  }

  private async generateForgotPasswordCode(userId: string) {
    const expiresAt = new Date();
    const code = this.generateConfirmationCode();

    expiresAt.setMinutes(
      expiresAt.getMinutes() + EXP_FORGOT_PASS_CODE_TIME_IN_MINUTES,
    );

    const forgotPasswordCode = await this.forgotPasswordCodesRepository.upsert({
      where: { userId },
      update: {
        code,
        expiresAt,
      },
      create: {
        code,
        expiresAt,
        userId,
      },
    });

    return forgotPasswordCode;
  }

  private generateConfirmationCode(): string {
    return randomInt(100000, 1000000).toString();
  }
}

export namespace AuthGateway {
  export type RefreshTokenInput = {
    refreshToken: string;
  };

  export type RefreshTokenOutput = {
    accessToken: string;
    refreshToken: string;
  };

  export type ResetRefreshTokenInput = {
    userId: string;
  };

  export type ResetRefreshTokenOutput = void;

  export type ForgotPasswordInput = {
    userId: string;
    email: string;
  };

  export type ForgotPasswordOutput = void;

  export type ConfirmForgotPasswordInput = {
    code: string;
  };

  export type ConfirmForgotPasswordOutput = {
    resetPasswordToken: string;
  };
}
