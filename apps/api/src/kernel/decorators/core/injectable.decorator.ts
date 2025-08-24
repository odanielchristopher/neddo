import { SINGLETON_METADATA_KEY } from '@kernel/constants';
import { Container } from '@kernel/di/container.di';
import { Constructor } from '@shared/types';

export type Options = {
  token?: string;
  scope?: 'singleton' | 'transient';
};

export function Injectable(
  { token, scope }: Options = { token: undefined, scope: 'singleton' },
): ClassDecorator {
  return (target) => {
    Container.getInstance().register({
      provide: token ?? target.name,
      useClass: target as unknown as Constructor,
    });

    if (scope === 'singleton') {
      Reflect.defineMetadata(SINGLETON_METADATA_KEY, true, target);
    }
  };
}
