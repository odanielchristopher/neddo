import { StorageGateway } from '@infra/gateways/storage.gateway';
import { Injectable } from '@kernel/decorators';

@Injectable()
export class GetPresignedUrlUseCase {
  constructor(private readonly storageGateway: StorageGateway) {}

  execute({
    fileName,
  }: GetPresignedUrlUseCase.Input): Promise<GetPresignedUrlUseCase.Output> {
    return this.storageGateway.getSignedUrl({ fileName });
  }
}

export namespace GetPresignedUrlUseCase {
  export type Input = { fileName: string };

  export type Output = { signedUrl: string; imageUrl: string };
}
