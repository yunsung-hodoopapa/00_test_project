import Layouts from 'src/components/layouts/Layouts';
import React, { FC } from 'react';
import styled from '@emotion/styled';

type CartLayoutType = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: calc(100vh - 300px);
  border: 1px solid red;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 20px;
`;

const CartLayout: FC<CartLayoutType> = ({ children }) => {
  return (
    <Layouts>
      <Container>
        <h2>장바구니</h2>
        {children}
      </Container>
    </Layouts>
  );
};

export default CartLayout;
