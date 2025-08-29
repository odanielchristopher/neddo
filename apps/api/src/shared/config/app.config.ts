import { Injectable } from '@kernel/decorators';

import { env } from './env.config';

@Injectable()
export class AppConfig {
  readonly auth: AppConfig.Auth;
  readonly mail: AppConfig.Mail;
  readonly db: AppConfig.Database;

  constructor() {
    this.mail = {
      resend: {
        key: env.RESEND_KEY,
        domain: env.RESEND_DOMAIN,
      },
    };

    this.db = {
      postgres: {
        url: env.DATABASE_URL,
      },
    };

    this.auth = {
      jwt: {
        secret: env.JWT_SECRET,
      },
    };
  }
}

export namespace AppConfig {
  export type Mail = {
    resend: {
      key: string;
      domain: string;
    };
  };

  export type Database = {
    postgres: {
      url: string;
    };
  };

  export type Auth = {
    jwt: {
      secret: string;
    };
  };
}
