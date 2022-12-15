import React from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { AppProps } from 'next/app';
import { ThemeProvider, Global } from '@emotion/react';
import theme from 'src/styles/Theme';
import global from 'src/styles/global';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}
const MyApp = (props: AppProps) => {
  const [queryClient] = React.useState(() => {
    return new QueryClient();
  });

  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default MyApp;
