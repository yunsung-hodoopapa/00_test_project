import type { NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { productApi } from 'src/api/productApi';
import ProductList from 'src/components/productList';
import Layouts from 'src/components/layouts/Layouts';

const Home: NextPage = () => (
  <Layouts>
    <ProductList />
  </Layouts>
);

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['products', 1], () =>
    productApi.getProducts(1),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
