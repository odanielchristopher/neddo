import { z } from 'zod';

import { LeadsRepository } from '../../../infra/database/repositories/LeadsRepository';
import { Body, Controller, StatusCode } from '../../../kernel/decorators';
import { Emit } from '../../../kernel/decorators/Emit';
import { IController } from '../../contracts/IController';

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  phone: z.string().nonempty(),
});

@Controller({
  http: 'post',
  path: '/',
})
@StatusCode(201)
export class CreateLeadController extends IController {
  constructor(private readonly leadsRepo: LeadsRepository) {
    super();
  }

  @Emit('leads:created')
  protected override async execute(@Body(schema) body: z.infer<typeof schema>) {
    const { name, email, phone } = body;

    const data = await this.leadsRepo.create({
      name,
      email,
      phone,
    });

    return data;
  }
}
