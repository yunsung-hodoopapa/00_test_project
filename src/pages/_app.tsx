import React from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { ThemeProvider, Global } from '@emotion/react';
import theme from 'src/styles/Theme';
import global from 'src/styles/global';
import type { AppProps } from 'next/app';

import setupMSW from 'src/api/setup';

import { Header } from 'src/components/header';
import Head from 'next/head';

setupMSW();

const MyApp = (props: AppProps) => {
  // 공통 컴포넌트 특히, 레이아웃은 _app.tsx에서 다루면 불필요한 사이드를 방지하는데 좋습니다.
  const [queryClient] = React.useState(() => new QueryClient());
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>호두파파 스토어</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Header />
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
