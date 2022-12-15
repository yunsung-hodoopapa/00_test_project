import { useQuery } from '@tanstack/react-query';
import { productApi } from 'src/api/productApi';
import { ProductInfoType } from 'src/type';

const useProducts = (page: number) =>
  useQuery(['products', page], () => productApi.getProducts(page), {
    keepPreviousData: false,
    select: (data) => {
      const sortingData = data.contents.sort(
        (a: ProductInfoType, b: ProductInfoType) => b.score - a.score,
      );
      const hasMore = data.totalPages > page;
      const totalPages = data.totalPages;
      return {
        sortingData,
        hasMore,
        totalPages,
      };
    },
  });

export { useProducts };
