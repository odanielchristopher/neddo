import type { AxiosInstance } from 'axios';

import type {
  IOrganization,
  OrganizationRole,
} from '@app/entities/Organization';

import { httpClient } from './httpClient';

class OrganizationsService {
  constructor(private readonly httpClient: AxiosInstance) {}

  getOne = async ({
    slug: pathname,
  }: OrganizationsService.GetOneInput = {}) => {
    const { data } =
      await this.httpClient.get<OrganizationsService.GetOneOutput>(
        `/organizations/${pathname}`,
      );

    return data;
  };

  findUserOrgs = async () => {
    const { data } =
      await this.httpClient.get<OrganizationsService.FindUserOrgsOutput>(
        '/organizations',
      );

    return data;
  };
}

export namespace OrganizationsService {
  export type GetOneInput = {
    id?: string;
    slug?: string;
  };

  export type GetOneOutput = {
    role: OrganizationRole;
    organization: IOrganization;
  };

  export type FindUserOrgsOutput = {
    role: 'OWNER' | 'ADMIN' | 'MEMBER';
    organization: IOrganization;
  }[];
}

export const organizationsService = new OrganizationsService(httpClient);
