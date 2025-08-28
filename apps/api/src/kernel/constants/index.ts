export const HTTP_STATUS_METADATA_KEY = 'http:status-code';
export const HTTP_METHOD_METADATA_KEY = 'http:method';
export const HTTP_PATH_METADATA_KEY = 'http:path';
export const PARAMS_METADATA_KEY = 'route:params';

export const PARAM_TYPE_METADATA_KEY = (index: number) =>
  `route:param:${index}`;
