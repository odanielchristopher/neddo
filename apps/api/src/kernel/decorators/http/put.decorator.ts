import { HTTP_METHOD_METADATA_KEY } from '@kernel/constants';

export function Put(): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(HTTP_METHOD_METADATA_KEY, 'put', target);
  };
}
