// execution-context.manager.ts
import { AsyncLocalStorage } from 'async_hooks';

export class ExecutionContext {
  private static als = new AsyncLocalStorage<ExecutionContext.Store>();

  static run<T>(store: ExecutionContext.Store, fn: () => Promise<T>) {
    return this.als.run(store, fn);
  }

  static get(): ExecutionContext.Store {
    return this.als.getStore() ?? {};
  }

  static set<T>(key: string, value: T) {
    const store = this.get();
    store[key] = value;
  }

  static getValue<T>(key: string): T | undefined {
    return this.get()[key];
  }
}

export namespace ExecutionContext {
  export type Store = Record<string, any>;
}
