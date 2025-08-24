import { ZodSchema } from 'zod';

import { addParamMetadata } from '@kernel/utils/add-param-decorator';

export function Param(data?: ZodSchema | string): ParameterDecorator {
  return (target, _key, index) => {
    addParamMetadata(target.constructor, {
      index,
      source: 'params',
      data,
    });
  };
}
