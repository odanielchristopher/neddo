import { ErrorCode } from '../core';

import { HttpException } from './HttpException';

export class UnauthorizedException extends HttpException {
  public override statusCode = 401;
  public override code: ErrorCode;

  constructor(message?: any, code?: ErrorCode) {
    super();

    this.name = 'Unauthorized';
    this.code = code ?? ErrorCode.UNAUTHORIZED;
    this.message = message ?? 'Unauthorized';
  }
}
