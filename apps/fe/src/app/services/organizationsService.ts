import type { AxiosInstance } from 'axios';

import type { IOrganization } from '@app/entities/Organization';

import { httpClient } from './httpClient';

class OrganizationsService {
  constructor(private readonly httpClient: AxiosInstance) {}

  async getOne({ pathname }: OrganizationsService.GetOneInput = {}) {
    const { data } = await this.httpClient.get<IOrganization>(
      `/organizations/${pathname}`,
    );

    return data;
  }
}

export namespace OrganizationsService {
  export type GetOneInput = {
    id?: string;
    pathname?: string;
  };
}

export const organizationsService = new OrganizationsService(httpClient);
