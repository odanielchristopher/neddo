import { HTTP_STATUS_METADATA_KEY } from '@kernel/constants';
import { HttpStatus } from '@kernel/enums/http-status.enum';

export function StatusCode(code: number | HttpStatus): ClassDecorator {
  return (target) => {
    if (typeof code !== 'number')
      throw new Error(`Type of ${code} is not number`);

    Reflect.defineMetadata(HTTP_STATUS_METADATA_KEY, code, target);
  };
}
