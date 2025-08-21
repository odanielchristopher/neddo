import { ZodSchema } from 'zod';

import { addParamMetadata } from '../../metadata';

export function Body(data?: ZodSchema | string): ParameterDecorator {
  return (target, _key, index) => {
    addParamMetadata(target.constructor, {
      index,
      source: 'body',
      data,
    });
  };
}
