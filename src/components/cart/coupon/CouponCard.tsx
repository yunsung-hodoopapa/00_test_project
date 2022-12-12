/* eslint-disable arrow-body-style */
import styled from '@emotion/styled';
import { CouponType } from 'src/type/index';
import Button from 'src/components/common/Button';
import { useCartStore } from 'src/store/useCartStore';

type PropType = {
  coupon: CouponType;
};

const CounponContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 10px 5px;
`;

const CouponTypeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  padding: 8px;
  background-color: black;
  color: white;
`;

const Counpon = styled.div`
  display: flex;
  width: 200px;
  padding: 8px;
  background-color: grey;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const CouponCard = (props: PropType) => {
  const { coupon } = props;
  const { adjustCoupons, adjustedCoupon } = useCartStore();

  console.log(adjustedCoupon);
  return (
    <CounponContainer>
      <CouponTypeWrap>
        <h3>{coupon.type}</h3>
      </CouponTypeWrap>
      <Counpon>
        <h3>{coupon.title}</h3>
      </Counpon>
      <ButtonWrap>
        <Button
          onClick={() => adjustCoupons(coupon.title)}
        >
          적용하기
        </Button>
      </ButtonWrap>
    </CounponContainer>
  );
};

export default CouponCard;
