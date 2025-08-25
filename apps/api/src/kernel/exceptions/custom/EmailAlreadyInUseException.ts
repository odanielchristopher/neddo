import { ErrorCode } from '../core';

import { ApplicationException } from './ApplicationException';

export class EmailAlreadyInUseException extends ApplicationException {
  public override statusCode = 409;

  public override code: ErrorCode;

  constructor() {
    super();

    this.name = 'EmailAlreadyInUse';
    this.message = 'This email is already in use';
    this.code = ErrorCode.EMAIL_ALREADY_IN_USE;
  }
}
