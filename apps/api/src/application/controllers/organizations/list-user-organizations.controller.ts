import { BaseController } from '@kernel/contracts';
import { Controller, Get } from '@kernel/decorators';

@Controller('')
@Get()
export class ListUserOrganizationsController extends BaseController<{
  ok: true;
}> {
  override async execute(): Promise<ListUserOrganizationsController.Response> {
    return {
      ok: true,
    };
  }
}

export namespace ListUserOrganizationsController {
  export type Response = {
    ok: true;
  };
}
