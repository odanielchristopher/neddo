import { RouteHandler } from 'fastify';

export function valiateOrgPresenceMiddleware(): RouteHandler {
  return (request, reply) => {
    const organizationId = request.headers['x-org-id'];

    if (!organizationId || typeof organizationId !== 'string') {
      return reply.status(403).send({ error: 'Organization Id is missing.' });
    }
  };
}
