/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { FastifyRequest } from 'fastify';
import { ZodSchema } from 'zod';

import { getParamMetadata } from '../metadata';
import { ArgMetadata } from '../types';

export function extractArgumentsFromRequest(
  controllerClass: Function,
  request: FastifyRequest,
): any[] {
  const params: ArgMetadata[] = getParamMetadata(controllerClass);
  const args: any[] = [];

  for (const { index, source, data } of params) {
    let value: any = request[source];

    if (data instanceof ZodSchema) {
      value = data.parse(value);
    }

    if (typeof data === 'string') {
      value = value?.[data];
    }

    args[index] = value;
  }

  return args;
}
