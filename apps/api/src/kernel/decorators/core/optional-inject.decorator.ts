export function OptionalInject(token: string): ParameterDecorator {
  return (target, _key, index) => {
    Reflect.defineMetadata(`inject:${index}`, token, target);
    Reflect.defineMetadata(`optional:${index}`, true, target);
  };
}
