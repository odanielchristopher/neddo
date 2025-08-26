import { ZodSchema } from 'zod';

import { addParamMetadata } from '@kernel/utils';

export function Query(data?: ZodSchema | string): ParameterDecorator {
  return (target, _key, index) => {
    addParamMetadata(target.constructor, {
      index,
      source: 'query',
      data,
    });
  };
}
