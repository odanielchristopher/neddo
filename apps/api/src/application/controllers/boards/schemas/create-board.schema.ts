import z from 'zod';

export const createBoardSchema = z.object({
  name: z.string().nonempty(),
  imagePath: z.string().optional(),
  users: z
    .object({
      id: z.uuidv4().nonempty(),
    })
    .array()
    .optional(),
});

export type CreateBoardDto = z.infer<typeof createBoardSchema>;
