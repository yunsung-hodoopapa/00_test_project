import React, { useState } from 'react';
import CartLayout from 'src/components/layouts/CartLayout';
import CartItems from 'src/components/cart/CartItems';
import CartInformation from 'src/components/cart/CartInformation';
import Modal from 'src/components/modal';
import { useCoupons } from 'src/hooks/useCoupons';
import CounponList from 'src/components/cart/coupon/CouponList';
import { useCartStore } from 'src/store/useCartStore';
import { useModalStore } from 'src/store/useModalStore';

const Cart = () => {
  const { isOpenModal } = useModalStore();
  const { data } = useCoupons();
  const { coupons } = useCartStore();

  return (
    <>
      <CartLayout>
        {isOpenModal && (
          <Modal>
            <CounponList />
          </Modal>
        )}
        <CartItems />
        <CartInformation/>
      </CartLayout>
    </>
  );
};
export default Cart;
