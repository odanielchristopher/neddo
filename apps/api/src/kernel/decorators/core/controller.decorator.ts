import { HTTP_PATH_METADATA_KEY } from '@kernel/constants';
import { Container } from '@kernel/di/container.di';
import { Constructor } from '@shared/types';

export function Controller(path: string): ClassDecorator {
  return (target) => {
    Container.getInstance().register({
      provide: target.name,
      useClass: target as unknown as Constructor,
    });

    Reflect.defineMetadata(HTTP_PATH_METADATA_KEY, path, target);
  };
}
