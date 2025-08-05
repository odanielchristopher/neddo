import { LeadsRepository } from '../../../infra/database/repositories/LeadsRepository';
import { Controller } from '../../../kernel/decorators';
import { IController } from '../../contracts/IController';

@Controller({
  http: 'get',
})
export class ListLeadsController extends IController {
  constructor(private readonly leadsRepo: LeadsRepository) {
    super();
  }

  protected override execute() {
    return this.leadsRepo.findAll();
  }
}
