import { OrganizationsRepository } from '../../../infra/database/repositories/OrganizationsRepository';
import { Controller } from '../../../kernel/decorators';
import { IController } from '../../contracts/IController';

@Controller({
  http: 'get',
  path: '/users',
})
export class ListOrgUsersController extends IController {
  constructor(
    private readonly organizationsRepository: OrganizationsRepository,
  ) {
    super();
  }

  protected override execute() {
    return this.organizationsRepository.findOrgUsers();
  }
}
