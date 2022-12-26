import React, { useState, Key } from 'react';
import Pagination from 'src/components/pagination/Pagination';
import { ProductCard } from 'src/components/productCard';
import { Products } from 'src/types';
import * as Styled from './ProductList.style';

type ProductListProps = {
  products: Products[];
};

const ProductList = ({ products }: ProductListProps) => {
  if (!products) return <></>;

  return (
    <Styled.Container>
      <Styled.ListWrap>
        {products.map((product) => (
          <ProductCard product={product} key={product.item_no} />
        ))}
      </Styled.ListWrap>
    </Styled.Container>
  );
};

export default ProductList;
