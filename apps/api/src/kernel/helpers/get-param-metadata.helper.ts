import { PARAMS_METADATA_KEY } from '@kernel/constants';
import { ArgMetadata } from '@kernel/types';

export function getParamMetadata(target: any): ArgMetadata[] {
  return Reflect.getMetadata(PARAMS_METADATA_KEY, target) || [];
}
