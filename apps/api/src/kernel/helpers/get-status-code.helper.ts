import { HTTP_STATUS_METADATA_KEY } from '@kernel/constants';

export function getStatusCode(target: any): number {
  return Reflect.getMetadata(HTTP_STATUS_METADATA_KEY, target) ?? 200;
}
