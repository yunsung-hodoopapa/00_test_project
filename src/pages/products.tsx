import type { NextPage } from 'next';
import { ProductList } from 'src/components/productList';
import { useProductsQueryWithRouter } from 'src/hooks/useProductQueryWithRouter';
import { Pagination } from 'src/components/pagination';

import styled from '@emotion/styled';

const ProductsPage: NextPage = () => {
  const { data, isFetched, isError } = useProductsQueryWithRouter();

  return (
    <Container>
      <ProductList products={data.products} />
      <Pagination />
    </Container>
  );
};

export default ProductsPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px 40px;
`;
