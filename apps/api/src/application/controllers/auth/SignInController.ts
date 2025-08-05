import { compare } from 'bcryptjs';
import { z } from 'zod';
import { PrismaClient } from '../../../../generated/prisma';
import {
  Body,
  Controller,
  Inject,
  StatusCode,
} from '../../../kernel/decorators';
import { IController } from '../../contracts/IController';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

@Controller({
  http: 'post',
  path: '/sign-in',
})
@StatusCode(201)
export class SignInController extends IController {
  constructor(@Inject('db') private readonly db: PrismaClient) {
    super();
  }

  protected override async execute(@Body(schema) body: z.infer<typeof schema>) {
    const { email, password } = body;

    const user = await this.db.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user || !(await compare(password, user.password))) {
      return { error: 'Invalid Crendentials.' };
    }

    const accessToken = this.getJwtService().sign({
      sub: user.id,
    });

    return { accessToken };
  }
}
