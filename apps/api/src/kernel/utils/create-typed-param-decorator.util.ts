import { ZodType } from 'zod';

import { PARAM_TYPE_METADATA_KEY } from '@kernel/constants';

import { coerceType } from './coerce-type.util';
import { createParamDecorator } from './create-param-decorator.util';

export type Source = 'body' | 'query' | 'params' | 'headers';

export function createTypedParamDecorator(source: Source) {
  return createParamDecorator<ZodType | string | undefined, any>(
    (data, context, index) => {
      const request = context.request;
      const payload = request[source];

      if (!data) return payload;

      if (isValidator(data)) {
        return data.parse(payload);
      }

      if (isKey(data)) {
        let value = payload?.[data];

        const expectedType = Reflect.getMetadata(
          PARAM_TYPE_METADATA_KEY(index),
          context.controller,
          context.handler,
        );

        if (expectedType && typeof value !== expectedType) {
          value = coerceType(value, expectedType, data);
        }

        return value;
      }

      return payload;
    },
  );
}

function isValidator(value: unknown): value is ZodType {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as any).parse === 'function'
  );
}

function isKey(value: unknown): value is string {
  return typeof value === 'string';
}
