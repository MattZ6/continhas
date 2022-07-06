import { apiClient } from './apiClient';

export namespace ListMonthsService {
  type Month = {
    date: Date;
  };

  type Response = Month[];

  export async function execute() {
    const { data } = await apiClient.get<Response>('/v1/transactions/months');

    return data;
  }
}
