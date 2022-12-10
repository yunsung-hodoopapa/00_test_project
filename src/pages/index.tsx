import React from 'react';
import type { NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useProducts } from 'src/hooks/useProducts';
import ProductCard from 'src/components/productCard';
import { Key } from 'react';
import { productApi } from 'src/api/productApi';

// type ProductInfoType = {
//   item_no: number;
//   item_name: string;
//   detail_image_url: string;
//   price: number;
//   score: number;
//   availableCoupon?: boolean;
// };

const Home: NextPage = () => {
  const { data, isLoading } = useProducts();

  console.log(data);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data &&
        data.map((item: any, index: Key | null | undefined) => {
          return <ProductCard item={item} key={index} />;
        })}
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['products'], () => {
    return productApi.getProducts();
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
