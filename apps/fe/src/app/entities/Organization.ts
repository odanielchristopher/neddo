export type OrganizationRole = 'ADMIN' | 'OWNER' | 'MEMBER';

export interface IOrganization {
  id: string;
  name: string;
  slug: string;
  imagePath?: string;
}
