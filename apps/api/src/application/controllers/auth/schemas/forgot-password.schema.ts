import z from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.email().nonempty(),
});

export type ForgotPasswordDto = z.infer<typeof forgotPasswordSchema>;
