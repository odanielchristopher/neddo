import { S3Client } from '@aws-sdk/client-s3';

import { env } from '@shared/config';

export const s3Client = new S3Client({
  region: env.S3_REGION,
});
