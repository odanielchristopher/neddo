import z from 'zod';

export const env = z
  .object({
    JWT_SECRET: z.string().nonempty(),
    DATABASE_URL: z.string().nonempty(),
    RESEND_KEY: z.string().nonempty(),
    RESEND_DOMAIN: z.string().nonempty(),
    BASE_URL: z.string().nonempty(),
  })
  .parse(process.env);
