import { setStatusCode } from '../../metadata';

export function StatusCode(code: number): ClassDecorator {
  return (target) => {
    setStatusCode(target, code);
  };
}
