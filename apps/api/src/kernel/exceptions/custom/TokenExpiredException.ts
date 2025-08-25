import { ErrorCode } from '../core';

import { ApplicationException } from './ApplicationException';

export class TokenExpiredException extends ApplicationException {
  public override statusCode = 401;

  public override code: ErrorCode;

  constructor() {
    super();

    this.name = 'TokenExpired';
    this.message = 'Token Expired';
    this.code = ErrorCode.TOKEN_EXPIRED;
  }
}
