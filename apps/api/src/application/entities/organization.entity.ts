export enum OrganizationRole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}

export type Organization = {
  id: string;
  name: string;
  slug: string;
  imagePath: string | null;
};
