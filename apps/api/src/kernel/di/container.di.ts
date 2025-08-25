import { isSingleton } from '@kernel/helpers';
import { Constructor } from '@shared/types';

export class Container {
  private static instance: Container;

  private providers = new Map<string, Container.Provider>();
  private values = new Map<string, any>();

  static getInstance() {
    if (!this.instance) {
      this.instance = new Container();
    }

    return this.instance;
  }

  static fork() {
    if (!this.instance) {
      this.instance = new Container();
    }

    const scoped = new Container();

    scoped.providers = new Map(this.instance.providers);
    scoped.values = new Map(this.instance.values);

    return scoped;
  }

  private constructor() {}

  register(type: Container.Type) {
    if ('useClass' in type) {
      this.registerClass(type.provide, type.useClass);
    } else if ('useValue' in type) {
      this.registerValue(type.provide, type.useValue);
    } else {
      throw new Error(`${type} haven't 'useClass' or 'useValue'`);
    }
  }

  registerClass(token: string, impl: Constructor) {
    if (this.providers.has(token)) {
      throw new Error(`"${token}" is already registered in the registry.`);
    }

    const deps = Reflect.getMetadata('design:paramtypes', impl) ?? [];

    this.providers.set(token, { impl, deps });
  }

  registerValue(token: string, value: any) {
    if (this.values.has(token)) {
      return;
    }

    this.values.set(token, value);
  }

  resolve<TImpl extends Constructor>(token: string): InstanceType<TImpl> {
    // // 1. Primeiro procura no contexto da requisição
    //   if (this.executionContext.has(token)) {
    //     return this.executionContext.get(token);
    //   }

    // 2. Depois verifica se é singleton já resolvido
    const existingInstance = this.values.get(token);
    if (existingInstance) {
      return existingInstance;
    }

    // 3. Se não, instancia a partir dos providers
    const provider = this.providers.get(token);
    if (!provider) {
      throw new Error(`"${token}" not registered.`);
    }

    const deps = provider.deps.map((dep, index) => {
      const token =
        Reflect.getMetadata(`inject:${index}`, provider.impl) || dep.name;
      return this.resolve(token);
    });

    const newInstance = new provider.impl(...deps);

    if (isSingleton(provider.impl)) {
      this.values.set(token, newInstance);
    }

    return newInstance;
  }
}

export namespace Container {
  export type Type =
    | { provide: string; useClass: Constructor }
    | { provide: string; useValue: any };

  export type Provider<T = any> = { impl: Constructor<T>; deps: Constructor[] };
}
