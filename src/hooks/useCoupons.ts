import { useQuery } from '@tanstack/react-query';
import { couponApi } from 'src/api/couponApi';
import { useCartStore } from 'src/store/useCartStore';

const useCoupons = () => {
  const { getCoupons } = useCartStore();
  return useQuery(['counpons'], () => couponApi.getCoupons(), {
    onSuccess: (data) => {
      const { coupons } = data;
      getCoupons(coupons);
    },
  });
};

export { useCoupons };
