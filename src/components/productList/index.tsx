import React, { useState } from 'react';
import { useProducts } from 'src/hooks/useProducts';
import Pagination from 'src/components/Pagination';
import ProductCard from 'src/components/productCard';
import { Key } from 'react';
import styled from '@emotion/styled';

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
`;

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data } = useProducts(currentPage);

  console.log(data?.totalPages);

  return (
    <ContentWrap>
      <ListContainer>
        {data &&
          data.sortingData.map((item: any, index: Key | null | undefined) => {
            return <ProductCard item={item} key={index} />;
          })}
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
