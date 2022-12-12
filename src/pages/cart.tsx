import React, { useState } from 'react';
import CartLayout from 'src/components/layouts/CartLayout';
import CartItems from 'src/components/cart/CartItems';
import CartInformation from 'src/components/cart/CartInformation';
import Modal from 'src/components/modal';
import { useCoupons } from 'src/hooks/useCoupons';
import CounponList from 'src/components/cart/coupon/CouponList';
import { useCartStore } from 'src/store/useCartStore';

const Cart = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { data } = useCoupons();
  const { coupons } = useCartStore();
  console.log(coupons);

  const onClickToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <CartLayout>
        {isOpenModal && (
          <Modal
            onClickToggleModal={onClickToggleModal}
            isOpenModal={isOpenModal}
          >
            <CounponList />
          </Modal>
        )}
        <CartItems />
        <CartInformation onClickToggleModal={onClickToggleModal} />
      </CartLayout>
    </>
  );
};
export default Cart;
