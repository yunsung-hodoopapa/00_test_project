import { useQuery } from '@tanstack/react-query';
import { a, b } from 'msw/lib/SetupApi-b2f0e5ac';
import { productApi } from 'src/api/productApi';

const useProducts = (page) => {
  return useQuery(
    ['products', page],
    () => {
      return productApi.getProducts(page);
    },
    {
      keepPreviousData: false,
      select: (data) => {
        const sortingData = data.contents.sort((a: any, b: any) => {
          return b.score - a.score;
        });
        const hasMore = data.totalPages > page;
        return {
          sortingData,
          hasMore,
        };
      },
    },
  );
};

export { useProducts };
