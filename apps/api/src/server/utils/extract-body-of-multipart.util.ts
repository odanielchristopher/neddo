import { FastifyRequest } from 'fastify';

export async function extractBodyOfMultipart(request: FastifyRequest) {
  const parts = request.parts();
  const body: Record<string, any> = {};

  for await (const part of parts) {
    if (part.type === 'field') {
      body[part.fieldname] = part.value;
    }
  }

  return body;
}
