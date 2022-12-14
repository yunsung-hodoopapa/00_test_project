/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import create from 'zustand';

type UseModalType = {
  isOpenModal: boolean;
  onClickToggle: () => void;
};

export const useModalStore = create<UseModalType>((set) => ({
  isOpenModal: false,
  onClickToggle: () => set((state) => ({ isOpenModal: !state.isOpenModal })),
}));
