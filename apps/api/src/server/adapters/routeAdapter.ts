import { RouteHandler } from 'fastify';
import { IController } from '../../application/contracts/IController';

type ControllerFactory = (organizationId: string) => IController;
type ControllerFactoryWithoutOrg = () => IController;

export function routeAdapter(
  controllerFactory: ControllerFactory,
  options?: { validateOrg: true },
): RouteHandler;

export function routeAdapter(
  controllerFactory: ControllerFactoryWithoutOrg,
  options?: { validateOrg: false },
): RouteHandler;

export function routeAdapter(
  controllerFactory: ControllerFactory | ControllerFactoryWithoutOrg,
  options: { validateOrg: boolean } = { validateOrg: true },
): RouteHandler {
  return (request, reply) => {
    const organizationId = request.headers['x-org-id'];

    if (!options.validateOrg) {
      const controller = (controllerFactory as ControllerFactoryWithoutOrg)();

      return controller.handler(request, reply);
    }

    if (!organizationId || typeof organizationId !== 'string') {
      return reply.status(403).send({ error: 'Organization Id is missing.' });
    }

    const controller = (controllerFactory as ControllerFactory)(organizationId);
    return controller.handler(request, reply);
  };
}
