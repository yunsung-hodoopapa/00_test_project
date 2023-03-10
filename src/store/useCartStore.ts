import create from 'zustand';
import { persist } from 'zustand/middleware';
import { StateCreator } from 'zustand';
import { PersistOptions } from 'zustand/middleware';
import {
  ProductInfoType,
  CouponType,
  RateCouponType,
  AmountCouponType,
} from 'src/types/index';

type CartStateType = {
  cart: ProductInfoType[];
  coupons: CouponType[];
  selectedIds: string[];
  adjustedCoupon: CouponType;
  addCartItem: (item: ProductInfoType) => void;
  increaseQuantity: (item: ProductInfoType) => void;
  removeCartItem: (item_no: number) => void;
  removeCartAllItem: () => void;
  reStoreCart: (cart: ProductInfoType[]) => void;
  getCoupons: (data: CouponType[]) => void;
  adjustCoupons: (title: string) => void;
  getSelectedIds: (selectedIds: string[]) => void;
  eraseCoupons: () => void;
};

type CartStatePersistType = (
  config: StateCreator<CartStateType>,
  options: PersistOptions<CartStateType>,
) => StateCreator<CartStateType>;

export const useCartStore = create<CartStateType>(
  (persist as CartStatePersistType)(
    (set) => ({
      cart: [],
      coupons: [],
      selectedIds: [],
      adjustedCoupon: {
        type: '',
        title: '',
        discountAmount: 0,
        discountRate: 0,
      },
      addCartItem: (item: ProductInfoType) => {
        set((state) => {
          if (state.cart.length === 3) {
            window.alert('아이템은 최대 3개까지 카트에 넣을 수 있습니다!');
            return {
              ...state,
              cart: state.cart,
            };
          }
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
      increaseQuantity: (item) => {
        set((state) => {
          console.log('here');
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
                ? {
                    ...storedItem,
                    quantity: Math.max(storedItem.quantity - 1, 0),
                  }
                : storedItem,
            )
            .filter((storedItem) => storedItem.quantity);

          return {
            ...state,
            cart: updatedCart,
          };
        });
      },
      removeCartAllItem: () => {
        set((state: CartStateType) => ({
          ...state,
          cart: [],
        }));
      },
      getCoupons: (coupons) => {
        set((state) => ({
          ...state,
          coupons,
        }));
      },
      adjustCoupons: (title) => {
        set((state: CartStateType) => {
          const getAdjustedCoupon = state.coupons.filter(
            (coupon: RateCouponType | AmountCouponType) =>
              coupon.title === title ? { ...coupon } : null,
          );
          return {
            ...state,
            adjustedCoupon: getAdjustedCoupon[0],
          };
        });
      },
      eraseCoupons: () => {
        set((state) => ({
          ...state,
          adjustedCoupon: {
            type: '',
            title: '',
            discountAmount: 0,
            discountRate: 0,
          },
        }));
      },
      getSelectedIds: (selectedIds) => {
        set((state) => ({
          ...state,
          selectedIds,
        }));
      },
      reStoreCart: (cart) => {
        set((state) => ({
          ...state,
          cart,
        }));
      },
    }),
    { name: 'user_CartStore' },
  ),
);
