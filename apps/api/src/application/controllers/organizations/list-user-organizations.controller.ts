import { BaseController } from '@kernel/contracts';
import { Controller, Get } from '@kernel/decorators';

@Controller('')
@Get()
export class ListOrganizationUsersController extends BaseController {
  override async execute(): Promise<ListOrganizationUsersController.Response> {
    console.log('hello');
  }
}

export namespace ListOrganizationUsersController {
  export type Response = any;
}
