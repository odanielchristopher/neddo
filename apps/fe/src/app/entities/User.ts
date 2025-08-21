import type { IOrganization } from './Organization';

export interface IUser {
  name: string;
  email: string;
  organizations: IOrganization[];
}
