import { ZodSchema } from 'zod';

export type ArgMetadata = {
  data: ZodSchema | string | undefined;
  index: number;
  source: 'body' | 'query' | 'params';
};
