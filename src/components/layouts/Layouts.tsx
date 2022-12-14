import React from 'react';
import Head from 'next/head';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layouts: React.FC<Props> = ({ children }) => {
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
