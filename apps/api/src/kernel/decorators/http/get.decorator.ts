import { HTTP_METHOD_METADATA_KEY } from '@kernel/constants';

export function Get(): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(HTTP_METHOD_METADATA_KEY, 'get', target);
  };
}
