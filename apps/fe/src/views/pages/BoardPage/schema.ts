import z from 'zod';

export const boardSchema = z.object({
  columns: z.record(
    z
      .object({
        id: z.string().nonempty(),
        title: z.string().nonempty(),
      })
      .array(),
  ),
  order: z.string().nonempty().array(),
});

export type BoardData = z.infer<typeof boardSchema>;
