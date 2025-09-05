import { InviteUserDto } from '@application/controllers/invites/schemas/invite-user.schema';
import { Organization } from '@application/entities/organization.entity';
import { ValidateUserExistenceUseCase } from '@application/utils/validations/validate-user-existence.usecase';
import { InvitationsRepository } from '@infra/database/repositories/invitations.repository';
import { MailGateway } from '@infra/gateways/mail.gateway';
import { NotificationsGateway } from '@infra/gateways/notifications.gateway';
import { Inject, Injectable } from '@kernel/decorators';
import { env } from '@shared/config';

@Injectable({
  scope: 'request',
})
export class InviteUserUseCase {
  constructor(
    @Inject('organization')
    private readonly organization: Organization,
    private readonly mailGateway: MailGateway,
    private readonly notificationsGateway: NotificationsGateway,
    private readonly invitationsRepository: InvitationsRepository,
    private readonly validateUserExistenceUseCase: ValidateUserExistenceUseCase,
  ) {}

  async execute({
    userId,
    invitedId,
    expiresAt,
    role,
  }: InviteUserUseCase.Input): Promise<InviteUserUseCase.Output> {
    const [invited, invitedBy] =
      await this.validateUserExistenceUseCase.validate([invitedId, userId]);

    const invitation = await this.invitationsRepository.create({
      data: {
        organizationId: this.organization.id,
        invitedById: invitedBy.id,
        email: invited.email,
        expiresAt,
        role,
      },
    });

    // await this.mailGateway.send({
    //   subject: 'Convite',
    //   to: invited.email,
    //   template: InviteUserEmail({
    //     inviteDate: formatDate(invitation.createdAt),
    //     invitedByEmail: invitedBy.email,
    //     invitedByUsername: invitedBy.name,
    //     userImage: invited.imagePath ?? undefined,
    //     username: invited.name,
    //     teamImage: this.organization.imagePath ?? undefined,
    //     teamName: this.organization.name,
    //     inviteLink: `${env.WEB_URL}/invites/${invitation.id}`,
    //   }),
    // });

    this.notificationsGateway.notifyUser({
      userId: invited.id,
      event: 'invitation',
      payload: {
        id: invitation.id,
        link: `${env.WEB_URL}/invites/${invitation.id}`,
        organization: {
          imagePath: this.organization.avatarPath,
          name: this.organization.name,
        },
      },
    });
  }
}

export namespace InviteUserUseCase {
  export type Input = InviteUserDto & { userId: string };

  export type Output = void;
}
