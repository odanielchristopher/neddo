import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';
import { Container } from '../../kernel/di/Container';

export function createRequestContext(
  request: FastifyRequest,
  _reply: FastifyReply,
  done: HookHandlerDoneFunction,
) {
  const container = Container.getInstance();

  container.registerContext({
    organizationId: request.headers['x-org-id'],
  });

  done();
}
