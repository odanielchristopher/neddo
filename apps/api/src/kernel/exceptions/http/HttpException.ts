import { ErrorCode } from '../core';

export abstract class HttpException extends Error {
  public abstract statusCode: number;

  public abstract code: ErrorCode;
}
