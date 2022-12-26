import React, { PropsWithChildren } from 'react';
import { useModalStore } from 'src/store/useModalStore';
// Styled 모듈을 분리
import * as Styled from './Modal.styled';

const Modal = ({ children }: PropsWithChildren) => {
  const { isOpenModal, onClickToggle } = useModalStore();

  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOpenModal) {
      onClickToggle();
    }
  };

  return (
    <Styled.Container>
      <Styled.DialogBox>{children}</Styled.DialogBox>
      <Styled.Backdrop onClick={onClickHandler} />
    </Styled.Container>
  );
};

export default Modal;
