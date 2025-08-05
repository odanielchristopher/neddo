import { Constructor, CONTROLLER_METADATA_KEY, Method } from '../../shared';
import { Container } from '../di/Container';

export interface ControllerMetadata {
  http: Method;
  path?: string;
}

export function Controller(options: ControllerMetadata): ClassDecorator {
  return (target) => {
    Container.getInstance().register(
      target.name,
      target as unknown as Constructor,
    );

    Reflect.defineMetadata(CONTROLLER_METADATA_KEY, options, target);
  };
}

export function getControllerMetadata(
  target: Constructor,
): ControllerMetadata | undefined {
  return Reflect.getMetadata(CONTROLLER_METADATA_KEY, target) ?? undefined;
}
