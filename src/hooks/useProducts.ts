import { useQuery } from '@tanstack/react-query';
import { productApi } from 'src/api/productApi';
import { ProductInfoType } from 'src/type';

const useProducts = (page: number) => {
  return useQuery(
    ['products', page],
    () => {
      return productApi.getProducts(page);
    },
    {
      keepPreviousData: false,
      select: (data) => {
        const sortingData = data.contents.sort(
          (a: ProductInfoType, b: ProductInfoType) => {
            return b.score - a.score;
          },
        );
        const hasMore = data.totalPages > page;
        const totalPages = data.totalPages;
        return {
          sortingData,
          hasMore,
          totalPages,
        };
      },
    },
  );
};

export { useProducts };
