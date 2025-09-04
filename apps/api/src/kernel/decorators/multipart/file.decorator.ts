import { MultipartFile } from '@fastify/multipart';
import { FastifyRequest } from 'fastify';

import { createParamDecorator } from '@kernel/utils';

export const File = createParamDecorator<undefined, MultipartFile | undefined>(
  async (_data, context) => {
    const request = context.request as FastifyRequest;

    const data = await request.file();

    return data;
  },
);
