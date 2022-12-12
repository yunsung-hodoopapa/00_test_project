import React, { useState } from 'react';
import CartLayout from 'src/components/layouts/CartLayout';
import CartItems from 'src/components/cart/CartItems';
import CartInformation from 'src/components/cart/CartInformation';
import Modal from 'src/components/modal';

const Cart = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

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
            이곳에 쿠폰이 들어갈 예정
          </Modal>
        )}
        <CartItems />
        <CartInformation onClickToggleModal={onClickToggleModal} />
      </CartLayout>
    </>
  );
};
export default Cart;
