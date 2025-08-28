import z from 'zod';

export const createBoardSchema = z.object({
  name: z.string().nonempty(),
  imagePath: z.string().optional(),
  users: z
    .object({
      id: z.uuidv4().nonempty(),
    })
    .array()
    .nonempty()
    .optional()
    .refine(
      (users) => {
        if (!users) return true;

        const ids = users.map((u) => u.id);
        return new Set(ids).size === ids.length;
      },
      { message: 'Usuários não podem ter IDs duplicados' },
    ),
});

export type CreateBoardDto = z.infer<typeof createBoardSchema>;
