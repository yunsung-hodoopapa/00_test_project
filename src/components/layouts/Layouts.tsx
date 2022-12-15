import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import Header from './Header';

const Layouts = ({ children }: PropsWithChildren) => (
  <>
    <Head>
      <title>호두파파 스토어</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Header />
    <div>{children}</div>
  </>
);

export default Layouts;
