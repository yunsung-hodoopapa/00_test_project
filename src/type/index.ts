export type ProductInfoType = {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
  quantity?: any;
};

export type CouponType = {
  type: string;
  title: string;
  discountRate?: number;
  discountAmount?: number;
};
