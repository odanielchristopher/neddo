import { FastifyRequest } from 'fastify';
import { ZodType } from 'zod';

import { ArgMetadata } from '@kernel/types';

import { getParamMetadata } from './get-param-metadata.helper';

export function extractArgsFromRequest(
  controllerClass: any,
  request: FastifyRequest,
): any[] {
  const params: ArgMetadata[] = getParamMetadata(controllerClass);
  const args: any[] = [];

  for (const { index, source, data } of params) {
    let value: any = request[source];

    if (data instanceof ZodType) {
      value = data.parse(value);
    }

    if (typeof data === 'string') {
      value = value?.[data];
    }

    args[index] = value;
  }

  return args;
}
