import { SINGLETON_METADATA_KEY } from '@kernel/constants';
import { Container } from '@kernel/di/container.di';
import { Constructor } from '@shared/types';

export type Options = {
  token?: string;
  scope?: 'default' | 'request';
};

export function Injectable(
  { token, scope }: Options = { token: undefined, scope: 'default' },
): ClassDecorator {
  return (target) => {
    Container.getInstance().register({
      provide: token ?? target.name,
      useClass: target as unknown as Constructor,
    });

    if (scope === 'default') {
      Reflect.defineMetadata(SINGLETON_METADATA_KEY, true, target);
    }
  };
}
