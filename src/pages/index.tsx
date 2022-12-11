import type { NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { productApi } from 'src/api/productApi';
import ProductList from 'src/components/productList';

const Home: NextPage = () => {
  return <ProductList />;
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
