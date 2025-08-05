import { Constructor } from '../../shared/types';
import { Container } from '../di/Container';
import { setSingleton } from '../metadata';

type InjectableMetadataOptions = {
  token?: string;
  scope?: 'singleton' | 'transient';
};

export function Injectable(
  { token, scope }: InjectableMetadataOptions = {
    scope: 'transient',
  },
): ClassDecorator {
  return (target) => {
    Container.getInstance().register(
      token ?? target.name,
      target as unknown as Constructor,
    );

    if (scope === 'singleton') {
      setSingleton(target);
    }
  };
}
