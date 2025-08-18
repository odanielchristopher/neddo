import type { AxiosInstance } from 'axios';

import type { FormData } from '@views/pages/Dashboard/schema';

import { httpClient } from './httpClient';

class BoardsService {
  constructor(private readonly httpClient: AxiosInstance) {}

  async getAll() {
    const { data } = await this.httpClient.get<FormData>('/dashboard');

    return data;
  }
}

export const boardsService = new BoardsService(httpClient);
