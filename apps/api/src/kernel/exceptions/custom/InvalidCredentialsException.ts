import { ErrorCode } from '../core';

import { ApplicationException } from './ApplicationException';

export class InvalidCredentialsException extends ApplicationException {
  public override statusCode = 401;

  public override code: ErrorCode;

  constructor() {
    super();

    this.name = 'InvalidCredentials';
    this.message = 'Invalid Credentials';
    this.code = ErrorCode.INVALID_CREDENTIALS;
  }
}
