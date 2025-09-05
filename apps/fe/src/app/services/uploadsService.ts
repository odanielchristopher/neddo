import type { AxiosInstance } from 'axios';

import { httpClient } from './httpClient';

export class UploadsService {
  constructor(private readonly httpClient: AxiosInstance) {}

  uploadFile = async ({
    file,
  }: UploadsService.GetPresignedUrlInput): Promise<UploadsService.GetPresinedUrlOutput> => {
    const {
      data: { signedUrl, imageUrl },
    } = await this.httpClient.post<{ signedUrl: string; imageUrl: string }>(
      '/uploads/presigned-url',
      {
        fileName: file.name,
      },
    );

    await this.httpClient.put(signedUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    });

    return imageUrl;
  };
}

export const uploadsService = new UploadsService(httpClient);

export namespace UploadsService {
  export type GetPresignedUrlInput = { file: File };

  export type GetPresinedUrlOutput = string;
}
