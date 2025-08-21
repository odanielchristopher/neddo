import { FastifyReply, FastifyRequest } from 'fastify';

import { extractArgumentsFromRequest } from '../../kernel/helpers';
import { getStatusCode } from '../../kernel/metadata';

export abstract class IController {
  request: FastifyRequest | null = null;
  reply: FastifyReply | null = null;

  async handler(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<unknown> {
    this.request = request;
    this.reply = reply;

    const args = extractArgumentsFromRequest(this.constructor, request);
    const response = await this.execute(...args);

    const code = getStatusCode(this.constructor);
    return reply.code(code).send(response);
  }

  protected abstract execute(...args: any[]): unknown | Promise<unknown>;

  protected getRequest() {
    if (!this.request) {
      throw new Error("Request isn't already setted");
    }

    return this.request;
  }

  protected getServer() {
    if (!this.request?.server) {
      throw new Error("Server isn't already setted");
    }

    return this.request.server;
  }

  protected getJwtService() {
    if (!this.request?.server?.jwt) {
      throw new Error("JwtService isn't already setted");
    }

    return this.request.server.jwt;
  }

  protected getReply() {
    if (!this.reply) {
      throw new Error("Reply isn't already setted");
    }

    return this.reply;
  }
}
