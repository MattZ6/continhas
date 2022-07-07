import { apiClient } from './apiClient';

export namespace CreateTransactionService {
  export type Request = {
    title: string;
    value: number;
    date: Date;
    type: 'INCOME' | 'OUTCOME';
  };

  type Response = void;

  export async function execute(data: Request) {
    const { title, value, date, type } = data;

    return apiClient.post<Response>('/v1/transactions', {
      title,
      value,
      date: date.toISOString(),
      type,
    });
  }
}
