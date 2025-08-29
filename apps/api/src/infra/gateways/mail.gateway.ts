import React from 'react';
import { Resend } from 'resend';

import { Injectable } from '@kernel/decorators';
import { AppConfig, env } from '@shared/config';

const resend = new Resend(env.RESEND_KEY);

@Injectable()
export class MailGateway {
  constructor(private readonly appConfig: AppConfig) {}

  send(payload: MailGateway.CreateEmailPayload) {
    return resend.emails.send({
      ...payload,
      react: payload.template,
      from: `noreply <neddo@${this.appConfig.mail.resend.domain}>`,
    });
  }
}

export namespace MailGateway {
  export type CreateEmailPayload = {
    subject: string;
    to: string;
    template: React.JSX.Element;
  };
}
