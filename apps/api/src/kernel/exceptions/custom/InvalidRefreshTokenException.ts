import { ErrorCode } from '../core';

import { ApplicationException } from './ApplicationException';

export class InvalidRefreshTokenException extends ApplicationException {
  public override statusCode = 401;

  public override code: ErrorCode;

  constructor() {
    super();

    this.name = 'InvalidRefreshToken';
    this.message = 'Invalid Refresh Token';
    this.code = ErrorCode.INVALID_REFRESH_TOKEN;
  }
}
