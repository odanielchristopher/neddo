import { Server as HttpServer } from 'node:http';

import { Server } from 'socket.io';

import { JwtService } from '@infra/lib/jwt.service';
import { Inject, Injectable } from '@kernel/decorators';
import { UnauthorizedException } from '@kernel/exceptions';
import { env } from '@shared/config';

@Injectable()
export class SocketProvider {
  private io: Server | undefined;

  constructor(@Inject(JwtService) private readonly jwtService: JwtService) {}

  init(httpServer: HttpServer) {
    if (this.io) return; // garante que só inicializa uma vez

    this.io = new Server(httpServer, {
      cors: {
        origin: env.WEB_URL,
        credentials: true,
      },
    });

    this.setupConnection();
  }

  private setupConnection() {
    if (!this.io) {
      throw new Error('Socket.IO não foi inicializado. Chame init() primeiro.');
    }

    // Criar um helper de validação do token;
    this.io.use((socket, next) => {
      try {
        const authorization = socket.handshake.auth?.token;
        if (!authorization) return next(new UnauthorizedException());

        const [type, token] = authorization.split(' ');
        if (type !== 'Bearer' || !token)
          return next(new UnauthorizedException());

        const payload = this.jwtService.verify<{ sub: string }>(token);
        socket.data.userId = payload.sub;

        next();
      } catch {
        return next(new UnauthorizedException());
      }
    });

    this.io.on('connection', (socket) => {
      // console.log(`🔌 Socket conectado: ${socket.id}`);

      socket.on('joinUser', (userId: string) => {
        socket.join(`user:${userId}`);
      });

      // socket.on('disconnect', () => {
      //   console.log(`❌ Socket desconectado: ${socket.id}`);
      // });
    });
  }

  getIO(): Server {
    if (!this.io) {
      throw new Error('Socket.IO não foi inicializado. Chame init() primeiro.');
    }

    return this.io;
  }
}
