/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import create from 'zustand';
import { ProductInfoType, CouponType } from 'src/type/index';

type CartStateType = {
  cart: ProductInfoType[];
  coupons: CouponType[];
  adjustedCoupon: CouponType | string;
  addCartItem: (item: any) => void;
  removeCartItem: (item_no: number) => void;
  getCoupons: (data: any) => void;
  adjustCoupons: (title: string) => void;
};

export const useCartStore = create<CartStateType>((set) => ({
  //initial state
  cart: [],
  coupons: [],
  adjustedCoupon: '',
  addCartItem: (item: any) => {
    set((state) => {
      const isPresent = state.cart.find(
        (presentItem) => presentItem.item_no === item.item_no,
      );
      if (!isPresent) {
        return {
          ...state,
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }
      const updatedCart = state.cart.map((presentItem) =>
        presentItem.item_no === item.item_no
          ? { ...presentItem, quantity: presentItem.quantity + 1 }
          : presentItem,
      );
      return {
        ...state,
        cart: updatedCart,
      };
    });
  },
  removeCartItem: (item_no) => {
    set((state) => {
      const isPresent = state.cart.findIndex(
        (presetItem) => presetItem.item_no === item_no,
      );
      if (isPresent === -1) {
        return {
          ...state,
        };
      }
      const updatedCart = state.cart
        .map((storedItem) =>
          storedItem.item_no === item_no
            ? { ...storedItem, quantity: Math.max(storedItem.quantity - 1, 0) }
            : storedItem,
        )
        .filter((storedItem) => storedItem.quantity);

      return {
        ...state,
        cart: updatedCart,
      };
    });
  },
  getCoupons: (coupons) => {
    set((state) => ({
      ...state,
      coupons,
    }));
  },
  adjustCoupons: (title) => {
    console.log(title);
    set((state) => {
      const getAdjustedCoupon = state.coupons.filter((coupon) =>
        coupon.title === title ? { ...coupon } : null,
      );
      console.log(getAdjustedCoupon);
      return {
        ...state,
        adjustedCoupon: getAdjustedCoupon,
      };
    });
  },
}));
