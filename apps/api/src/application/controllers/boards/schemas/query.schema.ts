import z from 'zod';

export const querySchema = z.uuidv4();

export type QueryDto = z.infer<typeof querySchema>;
