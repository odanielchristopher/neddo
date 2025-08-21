import { hash } from 'bcryptjs';
import { z } from 'zod';

import { PrismaClient } from '../../../../generated/prisma';
import { db } from '../../../infra/lib/db';
import { Body, Controller, Inject } from '../../../kernel/decorators';
import { IController } from '../../contracts/IController';

const schema = z.object({
  user: z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    password: z.string().min(6),
  }),
  organization: z.object({
    name: z.string().nonempty(),
  }),
});

@Controller({
  http: 'post',
  path: '/sign-up',
})
export class SignUpController extends IController {
  constructor(@Inject('db') private readonly db: PrismaClient) {
    super();
  }

  protected override async execute(@Body(schema) body: z.infer<typeof schema>) {
    const { organization, user } = body;

    const userAlreadyExists = await db.user.findUnique({
      where: { email: user.email },
      select: { id: true },
    });

    if (userAlreadyExists) {
      return { error: 'This email is already in use.' };
    }

    const hashedPassword = await hash(user.password, 12);

    const { id } = await this.db.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashedPassword,
        organizations: {
          create: {
            role: 'OWNER',
            organization: {
              create: {
                name: organization.name,
              },
            },
          },
        },
      },
    });

    return { userId: id };
  }
}
