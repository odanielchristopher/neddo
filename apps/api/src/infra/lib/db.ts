import { PrismaClient } from '../../../generated/prisma';
import { Container } from '../../kernel/di/Container';

export const db = new PrismaClient({
  log: ['error', 'info', 'query', 'warn'],
});

Container.getInstance().registerValue('db', db);
