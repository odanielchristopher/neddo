import z from 'zod';

export const signUpSchema = z.object({
  user: z.object({
    avatarPath: z.string().optional(),
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    age: z.number().int().min(18),
    email: z.email().nonempty(),
    password: z.string().nonempty().min(6),
  }),
  organization: z
    .object({
      avatarPath: z.string().optional(),
      name: z.string().nonempty(),
    })
    .optional(),
});

export type SignUpDto = z.infer<typeof signUpSchema>;
