import { fetcher } from '@src/api';
import {useQuery} from 'react-query';

interface Props {
  url: string;
  dependedParams?: any[];
  dependedKey?: string;
  enabled?: boolean;
  retry?: number;
}
export const useCustomQuery = <T>({
  url,
  dependedParams,
  dependedKey,
  enabled,
  retry = 1,
}: Props) => {
  const restParam = dependedParams?.length ? {...dependedParams} : [];

  return useQuery<T, Error>(
    [dependedKey || url, restParam],
    async (): Promise<T> => {
      return await fetcher<T>(url);
    },
    {enabled, retry: retry},
  );
};
