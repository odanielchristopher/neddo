import { HTTP_METHOD_METADATA_KEY } from '@kernel/constants';

export function Post(): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(HTTP_METHOD_METADATA_KEY, 'post', target);
  };
}
