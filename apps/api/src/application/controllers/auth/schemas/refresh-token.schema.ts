import z from 'zod';

export const refreshTokenSchema = z.object({
  refreshToken: z.uuidv4(),
});

export type RefreshTokenDto = z.infer<typeof refreshTokenSchema>;
