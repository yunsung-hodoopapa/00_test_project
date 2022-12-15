import React, { useState } from 'react';
import { useProducts } from 'src/hooks/useProducts';
import Pagination from 'src/components/Pagination';
import ProductCard from 'src/components/productCard';
import { Key } from 'react';
import styled from '@emotion/styled';
import { ProductInfoType } from 'src/type';

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-left: 0;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 20px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useProducts(currentPage);

  return (
    <ContentWrap>
      <ListContainer>
        {data &&
          data.sortingData.map((item: ProductInfoType, index: Key) => (
            <ProductCard item={item} key={index} />
          ))}
      </ListContainer>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hasMore={data?.hasMore}
        totalPages={data?.totalPages}
      />
    </ContentWrap>
  );
};

export default ProductList;
