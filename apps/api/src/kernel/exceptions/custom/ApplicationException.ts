import { ErrorCode } from '../core';

export abstract class ApplicationException extends Error {
  public statusCode?: number;

  public abstract code: ErrorCode;
}
