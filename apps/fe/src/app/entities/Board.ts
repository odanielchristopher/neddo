import type { IOrganization } from './Organization';

export interface IBoard {
  id: string;
  name: string;
  imagePath?: string;
  organization: IOrganization;
}
