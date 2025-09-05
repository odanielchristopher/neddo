import z from 'zod';

export const personalSchema = z
  .object({
    avatar: z.instanceof(File).optional(),
    name: z
      .string()
      .nonempty({ message: 'Nome do usuário é obrigatório' })
      .max(40, 'Máximo 40 caracteres'),
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('O e-mail deve ser válido'),
    confirmEmail: z
      .string()
      .nonempty('Confirme o seu e-mail')
      .email('O e-mail deve ser válido'),
  })
  .refine((data) => data.email === data.confirmEmail, {
    path: ['confirmEmail'],
    message: 'Os e-mails não coincidem',
  });
