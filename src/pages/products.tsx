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

  // TODO: 컴포넌트에서 사용하는 react-query의 cache key와 서버사이드에서 사용하는 cache key가 같은 상수를 참조하도록 구성되면 좋을 것 같음. 
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
