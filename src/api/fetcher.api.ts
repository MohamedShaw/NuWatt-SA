import {axios} from '@src/utils';

export async function fetcher<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);

    return response?.data;
  } catch (error) {
    throw error;
  }
}
