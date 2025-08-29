import z from 'zod';

export const confirmForgotPasswordSchema = z.object({
  code: z.string().length(6).nonempty(),
});

export type ConfirmForgotPasswordDto = z.infer<
  typeof confirmForgotPasswordSchema
>;
