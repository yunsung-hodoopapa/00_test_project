import React from 'react';
import CartLayout from 'src/components/layouts/CartLayout';
import CartItems from 'src/components/cart/CartItems';
import CartInformation from 'src/components/cart/CartInformation';
import Modal from 'src/components/modal';
import CounponList from 'src/components/cart/coupon/CouponList';
import { useModalStore } from 'src/store/useModalStore';
import { useCoupons } from 'src/hooks/useCoupons';
import { useCartStore } from 'src/store/useCartStore';

import FlexBox from 'src/components/common/FlexBox';
import { css } from '@emotion/react';

const Cart = () => {
  const { isOpenModal } = useModalStore();
  const { data } = useCoupons();
  const { coupons } = useCartStore();
  return (
    <>
      {isOpenModal && (
        <Modal>
          <CounponList />
        </Modal>
      )}
      <CartLayout>
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
      </CartLayout>
    </>
  );
};
export default Cart;
