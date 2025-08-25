import { ErrorCode } from '../core';

import { HttpException } from './HttpException';

export class NotFoundException extends HttpException {
  public override statusCode = 404;
  public override code: ErrorCode;

  constructor(message?: any, code?: ErrorCode) {
    super();

    this.name = 'NotFound';
    this.code = code ?? ErrorCode.NOT_FOUND;
    this.message = message ?? 'Not Found';
  }
}
