import { FastifyReply, FastifyRequest } from 'fastify';

export abstract class IMiddleware {
  abstract execute(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}
