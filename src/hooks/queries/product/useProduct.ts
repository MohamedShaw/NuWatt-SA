import {useScrollInfiniteQuery} from '../use-infinite-query.hook';

export const useProduct = () =>
  useScrollInfiniteQuery({
    url: 'products?limit=15',
  });
