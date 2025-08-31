import { SocketProvider } from '@infra/providers/socket.provider';
import { Injectable } from '@kernel/decorators';
import { USER_SOCKET_CONNECTION_KEY } from '@shared/constants';

@Injectable()
export class NotificationsGateway {
  constructor(private readonly socketProvider: SocketProvider) {}

  notifyUser(userId: string, event: string, payload: any) {
    this.socketProvider
      .getIO()
      .to(USER_SOCKET_CONNECTION_KEY(userId))
      .emit(event, payload);
  }
}
