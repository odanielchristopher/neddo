import type { OrganizationRole } from '@app/entities/Organization';

export const OrganizationPermissions = {
  boards: ['ADMIN', 'OWNER', 'MEMBER'],
  members: ['ADMIN', 'OWNER'],
  invites: ['OWNER'],
};

export type OrganizationPermission = keyof typeof OrganizationPermissions;

export function canAccess(
  role: OrganizationRole | undefined,
  permission: OrganizationPermission,
): boolean {
  if (!role) return false;

  return OrganizationPermissions[permission].includes(role);
}
