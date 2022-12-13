/* eslint-disable arrow-body-style */
import styled from '@emotion/styled';
import { CouponType } from 'src/type/index';
import Button from 'src/components/common/Button';
import { useCartStore } from 'src/store/useCartStore';
import { useModalStore } from 'src/store/useModalStore';

type PropType = {
  coupon: CouponType;
};

const CounponContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 70px;
  margin: 10px 5px;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
`;

const CouponTypeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  padding: 8px;
  height: 70px;
  border: none;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background-color: black;
  color: white;
`;

const Counpon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 8px;
  height: 70px;
  color: white;
  background-color: #373f50;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 70px;
  padding: 8px;
  margin-left: 1px;
  background-color: #373f50;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const CouponCard = (props: PropType) => {
  const { coupon } = props;
  const { adjustCoupons } = useCartStore();
  const { onClickToggle } = useModalStore();

  return (
    <CounponContainer>
      <CouponTypeWrap>
        <span>{coupon.type}</span>
      </CouponTypeWrap>
      <Counpon>
        <span>{coupon.title}</span>
      </Counpon>
      <ButtonWrap>
        <Button
          isBorder={true}
          themeId={'grey'}
          marginRight={'0px'}
          size={'LARGE'}
          onClick={() => {
            adjustCoupons(coupon.title);
            onClickToggle();
          }}
        >
          적용
        </Button>
      </ButtonWrap>
    </CounponContainer>
  );
};

export default CouponCard;
