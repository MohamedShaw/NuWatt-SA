import {fetcher} from '@src/api';
import {Page} from '@src/models';
import {useInfiniteQuery, UseInfiniteQueryOptions} from 'react-query';

interface Props {
  url: string;
  dependedKey?: string;
  options?: UseInfiniteQueryOptions<any, any>;
  dependedParams?: string[] | number[] | boolean[];
  limit?: number;
}
export const useScrollInfiniteQuery = <T>({
  url,
  dependedKey,
  options,
  limit,
  dependedParams,
}: Props) => {
  const restParam = dependedParams?.length ? {...dependedParams} : [];

  const {
    data: dataPage,
    error,
    refetch,
    remove,
    ...rest
  } = useInfiniteQuery<Page<T>, Error, Page<T>>(
    [dependedKey || url, restParam],
    async ({pageParam = 1}): Promise<Page<T>> => {
      return await fetcher<Page<T>>(
        `${url}${url.includes('?') ? '&' : '?'}skip=${pageParam}`,
      );
    },

    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.skip === lastPage.total) {
          return undefined;
        }
        return pages.length + 1;
      },
      refetchOnReconnect: true,
      keepPreviousData: true,
    },
  );

  return {
    data: dataPage?.pages?.map(ele => ele?.products).flat(),
    onRefetch: () => {
      refetch();
      remove();
    },
    refetch,
    remove,
    error,
    ...rest,
  };
};
