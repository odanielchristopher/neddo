import { ZodType } from 'zod';

import {
  PARAM_TYPE_METADATA_KEY,
  PARAMS_METADATA_KEY,
} from '@kernel/constants';
import { ExecutionContext } from '@kernel/context';

export type ParamFactory<TData = any, TOutput = any> = (
  data: TData,
  context: ExecutionContext.Store,
  index: number,
) => TOutput | Promise<TOutput>;

export function createParamDecorator<FactoryData = any, FactoryOutput = any>(
  factory: ParamFactory<FactoryData, FactoryOutput>,
): (data?: FactoryData, validator?: ZodType) => ParameterDecorator {
  return (data?, validator?): ParameterDecorator =>
    (target, key, index) => {
      const controller = target.constructor;

      const existingArgs =
        Reflect.getMetadata(PARAMS_METADATA_KEY, controller, key!) || [];

      const paramTypes =
        Reflect.getMetadata('design:paramtypes', target, key!) || [];

      const paramTypeName = paramTypes[index]?.name?.toLowerCase();

      Reflect.defineMetadata(
        PARAM_TYPE_METADATA_KEY(index),
        paramTypeName,
        controller,
        key!,
      );

      Reflect.defineMetadata(
        PARAMS_METADATA_KEY,
        [...existingArgs, { data, parser: validator, index, factory }],
        controller,
        key!,
      );
    };
}
