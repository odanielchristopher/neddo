import { ErrorCode } from '../core';

import { HttpException } from './HttpException';

export class BadRequestException extends HttpException {
  public override statusCode = 400;
  public override code: ErrorCode;

  constructor(message?: any, code?: ErrorCode) {
    super();

    this.name = 'BadRequest';
    this.code = code ?? ErrorCode.BAD_REQUEST;
    this.message = message ?? 'Bad Request';
  }
}
