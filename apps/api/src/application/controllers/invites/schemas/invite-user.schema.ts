import z from 'zod';

import { OrganizationRole } from '@application/entities/organization.entity';

export const inviteUserSchema = z.object({
  invitedId: z.uuidv4().nonempty(),
  role: z.enum(Object.values(OrganizationRole)).nonoptional(),
  expiresAt: z.coerce.date().nonoptional(),
});

export type InviteUserDto = z.infer<typeof inviteUserSchema>;
