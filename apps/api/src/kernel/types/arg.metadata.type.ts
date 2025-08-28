import { ZodType } from 'zod';

import { ParamFactory } from '@kernel/utils';

export type ArgMetadata = {
  data: ZodType | string | undefined;
  parser?: ZodType;
  factory: ParamFactory;
  index: number;
};
