import React, { PropsWithChildren } from 'react';
import Layouts from 'src/components/layouts/Layouts';
import FlexBox from 'src/components/common/FlexBox';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: calc(100vh - 300px);
  padding: 10px 20px;
  border: none;
`;

const CartLayout = ({ children }: PropsWithChildren) => (
  <Layouts>
    <FlexBox
      css={css`
        justify-content: center;
      `}
    >
      <h2>장바구니</h2>
    </FlexBox>
    <div>
      <hr
        css={css`
          width: 100%;
          height: 3px;
          background-color: black;
        `}
      />
    </div>
    <Container>{children}</Container>
  </Layouts>
);

export default CartLayout;
