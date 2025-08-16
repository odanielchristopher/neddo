import z from 'zod';

export const schema = z.object({
  todos: z.object({
    id: z.string(),
    title: z.string().nonempty(),
    tasks: z
      .object({
        id: z.string().nonempty(),
        title: z.string().nonempty(),
      })
      .array(),
  }),
});

export type FormData = z.infer<typeof schema>;
