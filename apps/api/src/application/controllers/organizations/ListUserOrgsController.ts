import { OrganizationsRepository } from '../../../infra/database/repositories/OrganizationsRepository';
import { Controller, StatusCode } from '../../../kernel/decorators';
import { IController } from '../../contracts/IController';

@Controller({
  http: 'get',
})
@StatusCode(200)
export class ListUserOrgsController extends IController {
  constructor(private readonly OrgsRepo: OrganizationsRepository) {
    super();
  }

  protected override async execute() {
    const { sub: userId } = this.getRequest().user;

    return this.OrgsRepo.findOrgsByUserId(userId);
  }
}
