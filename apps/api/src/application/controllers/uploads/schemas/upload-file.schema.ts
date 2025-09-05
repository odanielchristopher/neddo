import z from 'zod';

export const uploadFileSchema = z.object({
  fileName: z.string().nonempty(),
});

export type UploadFileDto = z.infer<typeof uploadFileSchema>;
