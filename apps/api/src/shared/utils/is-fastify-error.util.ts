import { FastifyError } from 'fastify';

export function isFastifyError(error: unknown): error is FastifyError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    typeof (error as any).code === 'string' &&
    'name' in error
  );
}
