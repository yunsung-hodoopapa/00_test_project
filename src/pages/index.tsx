import type { NextPage } from 'next';
import { Container, Box } from '@mui/material';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useProducts } from 'src/hooks/useProducts';

const Home: NextPage = () => {
  const { data } = useProducts();

  return (
    <Container>
      <Box>29cm프로젝트 세팅</Box>
    </Container>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['products'], () => {
    return useProducts();
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
