/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { WebSocketGateway } from '../../infra/gateways/WebSocketGateway';
import { Container } from '../di/Container';

export function Emit(event: string) {
  return function (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value as Function;

    descriptor.value = async function (...args: any[]) {
      const result = await originalMethod.apply(this, args);

      try {
        const container = Container.getInstance();
        const wsGateway = container.resolve<typeof WebSocketGateway>(
          WebSocketGateway.name,
        );
        const request = (this as any).getRequest();

        wsGateway.emitWithValidation(event, result, request);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to emit event:', error);
      }

      return result;
    };

    return descriptor;
  };
}
