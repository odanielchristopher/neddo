import { InviteUserDto } from '@application/controllers/invites/schemas/invite-user.schema';
import { Organization } from '@application/entities/organization.entity';
import { ValidateUserOwnershipUseCase } from '@application/utils/validations';
import { InvitationsRepository } from '@infra/database/repositories/invitations.repository';
import InviteUserEmail from '@infra/email/templates/invite-user.template';
import { MailGateway } from '@infra/gateways/mail.gateway';
import { Inject, Injectable } from '@kernel/decorators';
import { env } from '@shared/config';
import { formatDate } from '@shared/utils';

@Injectable({
  scope: 'request',
})
export class InviteUserUseCase {
  constructor(
    @Inject('organization')
    private readonly organization: Organization,
    private readonly mailGateway: MailGateway,
    private readonly invitationsRepository: InvitationsRepository,
    private readonly validateUserOwnershipUseCase: ValidateUserOwnershipUseCase,
  ) {}

  async execute({
    userId,
    invitedId,
    expiresAt,
    role,
  }: InviteUserUseCase.Input): Promise<InviteUserUseCase.Output> {
    const [invited, invitedBy] =
      await this.validateUserOwnershipUseCase.validate([invitedId, userId]);

    const invitation = await this.invitationsRepository.create({
      data: {
        organizationId: this.organization.id,
        invitedById: invitedBy.id,
        email: invited.email,
        expiresAt,
        role,
      },
    });

    await this.mailGateway.send({
      subject: 'Convite',
      to: invited.email,
      template: InviteUserEmail({
        inviteDate: formatDate(invitation.createdAt),
        invitedByEmail: invitedBy.email,
        invitedByUsername: invitedBy.name,
        userImage: invited.imagePath ?? undefined,
        username: invited.name,
        teamImage: this.organization.imagePath ?? undefined,
        teamName: this.organization.name,
        inviteLink: `${env.WEB_URL}/invites/${invitation.id}`,
      }),
    });
  }
}

export namespace InviteUserUseCase {
  export type Input = InviteUserDto & { userId: string };

  export type Output = void;
}
