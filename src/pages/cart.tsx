import { css } from '@emotion/react';
import { useModalStore } from 'src/store/useModalStore';
import CartItems from 'src/components/cart/CartItems';
import CartInformation from 'src/components/cart/CartInformation';
import CounponList from 'src/components/cart/coupon/CouponList';
import FlexBox from 'src/components/common/FlexBox';
import styled from '@emotion/styled';

import { Modal } from 'src/components/modal';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: calc(100vh - 300px);
  padding: 10px 20px;
  border: none;
`;

const Cart = () => {
  const { isOpenModal } = useModalStore();

  return (
    <>
      {isOpenModal && (
        <Modal>
          <CounponList />
        </Modal>
      )}
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
      <Container>
        <FlexBox
          css={css`
            gap: 20px;
            @media (max-width: 900px) {
              flex-direction: column;
            }
          `}
        >
          <CartItems />
          <CartInformation />
        </FlexBox>
      </Container>
    </>
  );
};

export default Cart;
