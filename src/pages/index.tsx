import React, { useState } from 'react';
import type { NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useProducts } from 'src/hooks/useProducts';
import ProductCard from 'src/components/productCard';
import { Key } from 'react';
import { productApi } from 'src/api/productApi';
import Pagination from 'src/components/pagination';
// type ProductInfoType = {
//   item_no: number;
//   item_name: string;
//   detail_image_url: string;
//   price: number;
//   score: number;
//   availableCoupon?: boolean;
// };

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data } = useProducts(currentPage);

  return (
    <div>
      {data &&
        data.sortingData.map((item: any, index: Key | null | undefined) => {
          return <ProductCard item={item} key={index} />;
        })}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['products', 0], () => {
    return productApi.getProducts(0);
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
