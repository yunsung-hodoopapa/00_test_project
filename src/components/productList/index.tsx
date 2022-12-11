import React, { useState } from 'react';
import { useProducts } from 'src/hooks/useProducts';
import Pagination from 'src/components/pagination';
import ProductCard from 'src/components/productCard';
import { Key } from 'react';
import styled from '@emotion/styled';

const ListContainer = styled.div`
  display: grid;
  height: 400px;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
`;

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data } = useProducts(currentPage);

  return (
    <>
      <ListContainer>
        {data &&
          data.sortingData.map((item: any, index: Key | null | undefined) => {
            return <ProductCard item={item} key={index} />;
          })}
      </ListContainer>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default ProductList;
