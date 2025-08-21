import type { AxiosInstance } from 'axios';

import type { BoardData } from '@views/pages/BoardPage/schema';

import { httpClient } from './httpClient';

class BoardsService {
  constructor(private readonly httpClient: AxiosInstance) {}

  async getAll() {
    const { data } = await this.httpClient.get<BoardData>('/dashboard');

    return data;
  }
}

export namespace BoardsService {}

export const boardsService = new BoardsService(httpClient);
