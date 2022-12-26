import React, { useState, Key } from 'react';
import { useProducts } from 'src/hooks/useProducts';
import Pagination from 'src/components/Pagination';
import { ProductCard } from 'src/components/productCard';
import { ProductInfoType } from 'src/type';

import * as Styled from './ProductList.style';

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useProducts(currentPage);

  return (
    <Styled.Container>
      <Styled.ListWrap>
        {data &&
          data.sortingData.map((item: ProductInfoType, index: Key) => (
            <ProductCard item={item} key={index} />
          ))}
      </Styled.ListWrap>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hasMore={data?.hasMore}
        totalPages={data?.totalPages}
      />
    </Styled.Container>
  );
};

export default ProductList;
