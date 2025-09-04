import { getStatusCode } from '@kernel/helpers';
import { extractArgsFromRequest } from '@kernel/helpers/extract-args-from-request.helper';

export abstract class IController<TBody = undefined | void> {
  public async handler(): Promise<Controller.Response<TBody>> {
    const args = await extractArgsFromRequest(
      this.constructor,
      this.execute.name,
    );
    const body = await this.execute(...args);

    return {
      code: getStatusCode(this.constructor),
      body,
    };
  }

  protected abstract execute(
    ...args: unknown[]
  ): Promise<Controller.Response<TBody>['body']>;
}

export namespace Controller {
  export type Response<T = undefined> = {
    code: number;
    body?: T;
  };
}
