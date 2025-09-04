import z from 'zod';

export const passwordSchema = z
  .object({
    password: z
      .string()
      .nonempty('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPassword: z.string().nonempty('Confirme a sua senha'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas não coincidem',
  });
