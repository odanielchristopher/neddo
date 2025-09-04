import { SocketProvider } from '@infra/providers/socket.provider';
import { Injectable } from '@kernel/decorators';
import { USER_SOCKET_CONNECTION_KEY } from '@shared/constants';

@Injectable()
export class NotificationsGateway {
  constructor(private readonly socketProvider: SocketProvider) {}

  notifyUser({ userId, event, payload }: NotificationsGateway.Notify<'user'>) {
    this.socketProvider
      .getIO()
      .to(USER_SOCKET_CONNECTION_KEY(userId))
      .emit(event, payload);
  }
}

export namespace NotificationsGateway {
  export type Notify<T extends string> = {
    [K in `${T}Id`]: string;
  } & {
    event: string;
    payload: any;
  };
}
