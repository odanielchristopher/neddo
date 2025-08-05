import { Constructor } from './Constructor';

export type Provider<T = any> = {
  impl: Constructor<T>;
  deps: Constructor[];
};
