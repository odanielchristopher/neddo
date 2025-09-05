import { randomUUID } from 'node:crypto';

import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import { s3Client } from '@infra/clients/s3.client';
import { Injectable } from '@kernel/decorators';
import { AppConfig } from '@shared/config';

@Injectable()
export class StorageGateway {
  constructor(private readonly appConfig: AppConfig) {}

  async getSignedUrl({
    fileName,
  }: StorageGateway.GetSignedUrlInput): Promise<StorageGateway.GetSignedUrlOutput> {
    const fileKey = `${randomUUID()}-${fileName}`;

    const s3Command = new PutObjectCommand({
      Bucket: this.appConfig.storage.s3.bucket,
      Key: fileKey,
    });

    const signedUrl = await getSignedUrl(s3Client, s3Command, {
      expiresIn: 60,
    });

    // 🔹 URL pública da imagem (sem assinatura)
    const imageUrl = `https://${this.appConfig.storage.s3.bucket}.s3.${this.appConfig.storage.s3.region}.amazonaws.com/${fileKey}`;

    return {
      signedUrl,
      imageUrl,
    };
  }
}

export namespace StorageGateway {
  export type GetSignedUrlInput = {
    fileName: string;
  };

  export type GetSignedUrlOutput = {
    signedUrl: string;
    imageUrl: string;
  };
}
