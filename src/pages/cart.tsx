import { dehydrate, QueryClient } from '@tanstack/react-query';
import { css } from '@emotion/react';

import { useModalStore } from 'src/store/useModalStore';
import { couponApi } from 'src/api/couponApi';

import CartLayout from 'src/components/layouts/CartLayout';
import CartItems from 'src/components/cart/CartItems';
import CartInformation from 'src/components/cart/CartInformation';
import Modal from 'src/components/modal';
import CounponList from 'src/components/cart/coupon/CouponList';
import FlexBox from 'src/components/common/FlexBox';

const Cart = () => {
  const { isOpenModal } = useModalStore();

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

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['coupons'], () => {
    return couponApi.getCoupons();
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default Cart;
