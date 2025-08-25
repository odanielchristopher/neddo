import { ErrorCode } from '../core';

import { HttpException } from './HttpException';

export class ForbiddenException extends HttpException {
  public override statusCode = 403;
  public override code: ErrorCode;

  constructor(message?: any, code?: ErrorCode) {
    super();

    this.name = 'Forbidden';
    this.code = code ?? ErrorCode.FORBIDDEN;
    this.message = message ?? 'Forbidden';
  }
}
