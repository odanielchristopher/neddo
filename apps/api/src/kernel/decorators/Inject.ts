export function Inject(token: string): ParameterDecorator {
  return (target, _key, index) => {
    Reflect.defineMetadata(`inject:${index}`, token, target);
  };
}
