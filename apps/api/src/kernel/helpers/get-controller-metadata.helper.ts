import {
  HTTP_METHOD_METADATA_KEY,
  HTTP_PATH_METADATA_KEY,
} from '@kernel/constants';
import { HttpMethod } from '@shared/types';

export function getControllerMetadata(target: any) {
  return {
    path: Reflect.getMetadata(HTTP_PATH_METADATA_KEY, target) as
      | string
      | undefined,
    method: Reflect.getMetadata(HTTP_METHOD_METADATA_KEY, target) as
      | HttpMethod
      | undefined,
  };
}
