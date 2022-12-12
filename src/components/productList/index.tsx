import React, { useState } from 'react';
import { useProducts } from 'src/hooks/useProducts';
import Pagination from 'src/components/pagination';
import ProductCard from 'src/components/productCard';
import { Key } from 'react';
import styled from '@emotion/styled';

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 400px;
  margin: 20px;
  /* grid-template-columns: repeat(auto-fill, minmax(20%, auto)); */
`;

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data } = useProducts(currentPage);

  return (
    <ContentWrap>
      <ListContainer>
        {data &&
          data.sortingData.map((item: any, index: Key | null | undefined) => {
            return <ProductCard item={item} key={index} />;
          })}
      </ListContainer>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </ContentWrap>
  );
};

export default ProductList;
