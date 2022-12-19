import { useQuery } from '@tanstack/react-query';
import { productApi } from 'src/api/productApi';
import { ProductInfoType } from 'src/type';

const useProducts = (page: number) =>
  useQuery(['products', page], () => productApi.getProducts(page), {
    keepPreviousData: false,
    // TODO: useQuery에서 select문으로 가져온 데이터를 shallow 카피하지 않고, 가공하여 cached된 데이터가 수정된다. 이 부분 수정하기
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
