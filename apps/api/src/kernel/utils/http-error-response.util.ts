import { ErrorCode } from '@kernel/exceptions';

export interface IHttpErrorResponseParams {
  code: ErrorCode;
  message: any;
  details?: {
    field: string;
    message: string;
  }[];
}

export function httpErrorResponse({
  code,
  message,
  details,
}: IHttpErrorResponseParams) {
  return {
    error: {
      code,
      message,
      details,
    },
  };
}
