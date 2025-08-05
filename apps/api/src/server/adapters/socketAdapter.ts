import { RawServerDefault } from 'fastify';
import { WebSocketGateway } from '../../infra/gateways/WebSocketGateway';
import { Container } from '../../kernel/di/Container';

export function initializeWebSockets(server: RawServerDefault) {
  const container = Container.getInstance();

  // Registrar o servidor HTTP
  container.registerValue('server', server);

  // Resolver o gateway para inicializar o Socket.IO
  container.resolve<typeof WebSocketGateway>(WebSocketGateway.name);
}
