import { JWT } from '@fastify/jwt';

export const JwtService = Symbol('JwtService').toString();

export type JwtService = JWT;
