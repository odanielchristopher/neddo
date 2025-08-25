import { ErrorCode } from '../core';

import { HttpException } from './HttpException';

export class InternalServerErrorException extends HttpException {
  public override statusCode = 500;
  public override code: ErrorCode;

  constructor(message?: any, code?: ErrorCode) {
    super();

    this.name = 'InternalServerError';
    this.code = code ?? ErrorCode.INTERNAL_SERVER_ERROR;
    this.message = message ?? 'Internal Server Error';
  }
}
