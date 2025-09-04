import { ZodType } from 'zod';

import { PARAMS_METADATA_KEY } from '@kernel/constants';
import { ExecutionContext } from '@kernel/context';
import { ArgMetadata } from '@kernel/types';

export async function extractArgsFromRequest(
  controllerClass: any,
  key: string,
): Promise<any[]> {
  const params: ArgMetadata[] =
    Reflect.getMetadata(PARAMS_METADATA_KEY, controllerClass, key!) || [];
  const args: any[] = [];

  for (const { data, factory, index, parser } of params) {
    let value = await factory(data, ExecutionContext.get(), index);

    if (parser instanceof ZodType) {
      value = parser.parse(value);
    }

    args[index] = value;
  }
  // for (const { index, source, data } of params) {
  //   let value: any = request[source];

  //   if (data instanceof ZodType) {
  //     value = data.parse(value);
  //   }

  //   if (typeof data === 'string') {
  //     value = value?.[data];
  //   }

  //   args[index] = value;
  // }

  return args;
}
