import CouponCard from './CouponCard';
import { useCartStore } from 'src/store/useCartStore';
import styled from '@emotion/styled';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CounponList = () => {
  const { coupons } = useCartStore();
  return (
    <ListContainer>
      <h3>쿠폰목록</h3>
      {coupons.length &&
        coupons.map((coupon, index) => {
          return <CouponCard coupon={coupon} key={index} />;
        })}
    </ListContainer>
  );
};

export default CounponList;
