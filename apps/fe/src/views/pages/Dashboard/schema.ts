import z from 'zod';

export const schema = z.object({
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

export type FormData = z.infer<typeof schema>;
