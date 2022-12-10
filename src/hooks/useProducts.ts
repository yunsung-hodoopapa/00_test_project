import { useQuery } from '@tanstack/react-query';
import { a, b } from 'msw/lib/SetupApi-b2f0e5ac';
import { productApi } from 'src/api/productApi';

const useProducts = () => {
  return useQuery(
    ['products'],
    () => {
      return productApi.getProducts();
    },
    {
      select: (data) => {
        const sortingData = data.sort((a: any, b: any) => {
          return b.score - a.score;
        });
        return sortingData;
      },
    },
  );
};

export { useProducts };
