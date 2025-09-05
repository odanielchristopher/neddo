import { GetPresignedUrlUseCase } from '@application/usecases/uploads/get-presesined-url.usecase';
import { IController } from '@kernel/contracts';
import { Body, Controller, Post } from '@kernel/decorators';

import { UploadFileDto, uploadFileSchema } from './schemas/upload-file.schema';

@Controller('/presigned-url')
@Post()
export class GetPresignedUrlController extends IController<GetPresignedUrlController.Response> {
  constructor(private readonly uploadFileUseCase: GetPresignedUrlUseCase) {
    super();
  }

  override async execute(
    @Body(uploadFileSchema) uploadFileDto: UploadFileDto,
  ): Promise<GetPresignedUrlController.Response> {
    return this.uploadFileUseCase.execute(uploadFileDto);
  }
}

export namespace GetPresignedUrlController {
  export type Response = { signedUrl: string; imageUrl: string };
}
