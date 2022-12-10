import { useQuery } from '@tanstack/react-query';
import { productApi } from 'src/api/productApi';

const useProducts = () => {
  return useQuery(['products'], () => {
    productApi.getProducts();
  });
};

export { useProducts };
