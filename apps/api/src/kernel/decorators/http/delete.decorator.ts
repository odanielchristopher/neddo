import { HTTP_METHOD_METADATA_KEY } from '@kernel/constants';

export function Delete(): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(HTTP_METHOD_METADATA_KEY, 'delete', target);
  };
}
