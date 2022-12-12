import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { useModalStore } from 'src/store/useModalStore';

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const DialogBox = styled.dialog`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 1000;
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const Modal = ({ children }: PropsWithChildren) => {
  const { isOpenModal, onClickToggle } = useModalStore();

  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOpenModal) {
      onClickToggle();
    }
  };

  return (
    <ModalContainer>
      <DialogBox>{children}</DialogBox>
      <Backdrop onClick={onClickHandler} />
    </ModalContainer>
  );
};

export default Modal;
