import { ExecutionContext } from '@kernel/context';
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

  resolve<TImpl extends Constructor>(
    token: string,
    options?: { isOptional?: false },
  ): InstanceType<TImpl>;

  resolve<TImpl extends Constructor>(
    token: string,
    options: { isOptional: true },
  ): InstanceType<TImpl> | undefined;

  resolve<TImpl extends Constructor>(
    token: string,
    options: { isOptional?: boolean } = { isOptional: false },
  ): InstanceType<TImpl> | undefined {
    // 1. Tenta pegar do contexto de request
    const ctxValue = ExecutionContext.getValue(token);
    if (ctxValue) return ctxValue as any;

    // 2. Tenta pegar instância singleton já criada
    if (this.values.has(token)) {
      return this.values.get(token);
    }

    // 3. Procura provider registrado
    const provider = this.providers.get(token);
    if (!provider) {
      if (!options.isOptional) {
        throw new Error(`"${token}" not registered.`);
      }
      return undefined;
    }

    // 4. Resolve dependências recursivamente
    const deps = provider.deps.map((dep, index) => {
      const depToken =
        Reflect.getMetadata(`inject:${index}`, provider.impl) || dep.name;
      const isOptional =
        Reflect.getMetadata(`optional:${index}`, provider.impl) ?? false;
      return this.resolve(depToken, { isOptional });
    });

    const newInstance = new provider.impl(...deps);

    // 5. Se for singleton, guarda em cache
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

  export type ExecutionContext = {
    organizationId: string;
    userId: string;
  };
}
