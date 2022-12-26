import styled from '@emotion/styled';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useCartStore } from 'src/store/useCartStore';
import { couponApi } from 'src/api/couponApi';
import { useCoupons } from 'src/hooks/useCoupons';
import FlexBox from 'src/components/common/FlexBox';
import CouponCard from './CouponCard';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CounponList = () => {
  const { coupons } = useCartStore();
  const { data, isLoading } = useCoupons();

  if (isLoading) {
    return <FlexBox>데이터 로딩 중..</FlexBox>;
  }

  return (
    <ListContainer>
      <h2>쿠폰목록</h2>
      {data &&
        coupons.length &&
        coupons.map((coupon, index) => (
          <CouponCard coupon={coupon} key={index} />
        ))}
    </ListContainer>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['coupons'], () => couponApi.getCoupons());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default CounponList;
