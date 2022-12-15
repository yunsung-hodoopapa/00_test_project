import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import Header from './Header';

const Layouts = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>29cm 과제 프로젝트</title>
      </Head>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layouts;
