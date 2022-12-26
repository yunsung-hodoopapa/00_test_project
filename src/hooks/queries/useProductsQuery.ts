import axios from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { Product } from 'src/types';
import * as queryKeys from 'src/constants/queryKeys';

type ProductResponse = {
  data: {
    products: Product[];
    totalCount: number;
  };
};

// useQueryOption의 리턴 데이터를 오버로딩으로 정의한다.
type FetchProductsResult = ProductResponse['data'] | null;

// 훅이 많아질 경우를 생각해서, api 패칭 함수를 정의하는 부분과 useQuery를 정의하는 파일을 한데로 합친다. 
export const fetchProducts = async (page: number, size: number) => {
  try {
    const { data } = await axios.get<ProductResponse>(
      'products?page=${page}&size=${size}',
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const useProductsQuery = ({
  size,
  page,
  options,
}: {
  size: number;
  page: number;
  options: UseQueryOptions<FetchProductsResult>;
}) => {
  const queryResult = useQuery<FetchProductsResult>(
    [queryKeys.PRODUCTS_PAGINATION, size, page],
    () => fetchProducts(page, size),
    options,
  );
  return queryResult;
};
