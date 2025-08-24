import { SINGLETON_METADATA_KEY } from '@kernel/constants';

export function isSingleton(target: any): boolean {
  return Reflect.getMetadata(SINGLETON_METADATA_KEY, target) ?? false;
}
