import z from 'zod';

export const signUpSchema = z.object({
  user: z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    password: z.string().min(6),
  }),
  organization: z.object({
    name: z.string().nonempty(),
  }),
});

export type SignUpDto = z.infer<typeof signUpSchema>;
