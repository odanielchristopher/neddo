import { ErrorCode } from '../core';

import { HttpException } from './HttpException';

export class ConflictException extends HttpException {
  public override statusCode = 409;
  public override code: ErrorCode;

  constructor(message?: any, code?: ErrorCode) {
    super();

    this.name = 'Conflict';
    this.code = code ?? ErrorCode.CONFLICT;
    this.message = message ?? 'Conflict';
  }
}
