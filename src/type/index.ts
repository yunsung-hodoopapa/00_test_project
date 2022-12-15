export type ProductInfoType = {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
  quantity?: any;
};

export interface CouponType {
  type: string;
  title: string;
  discountAmount: number;
  discountRate: number;
}

export type RateCouponType = {
  type: string;
  title: string;
  discountRate: number;
};

export type AmountCouponType = {
  type: string;
  title: string;
  discountAmount: number;
};

export type CartItemType = {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  quantity?: number;
  score: number;
};
