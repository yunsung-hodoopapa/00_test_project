import { useQuery } from '@tanstack/react-query';
import { productApi } from 'src/api/productApi';

const useProducts = () => {
  return useQuery(['products'], () => {
    return productApi.getProducts();
  });
};

export { useProducts };
