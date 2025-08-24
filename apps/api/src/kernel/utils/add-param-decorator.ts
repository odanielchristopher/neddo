import { PARAMS_METADATA_KEY } from '@kernel/constants';
import { ArgMetadata } from '@kernel/types';

export function addParamMetadata(target: any, metadata: ArgMetadata): void {
  const existing = Reflect.getMetadata(PARAMS_METADATA_KEY, target) || [];
  Reflect.defineMetadata(PARAMS_METADATA_KEY, [...existing, metadata], target);
}
