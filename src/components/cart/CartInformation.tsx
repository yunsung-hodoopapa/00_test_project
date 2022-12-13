/* eslint-disable no-prototype-builtins */
/* eslint-disable react-hooks/rules-of-hooks */
import { useCartStore } from 'src/store/useCartStore';
import styled from '@emotion/styled';
import {
  ProductInfoType,
  RateCouponType,
  AmountCouponType,
} from 'src/type/index';
import { useModalStore } from 'src/store/useModalStore';

const CartProceedWrap = styled.div`
  padding: 8px 16px;
  margin-left: 16px;
  border: 1px solid tomato;
`;

const FlexBetweenBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DialgButton = styled.button`
  width: 130px;
  height: 38px;
  background-color: blueviolet;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const CartInformation = () => {
  const { cart, selectedIds, adjustedCoupon, eraseCoupons } = useCartStore();
  const { onClickToggle } = useModalStore();

  if (!cart.length) {
    return <div></div>;
  }

  // 선택된 아이템만 결제금액을 계산 하도록 함수 추가
  const selecteItemInfo = cart
    .map((item) => {
      let selectWrap: Array<ProductInfoType> = [];
      const itemId = item.item_no.toString();
      selectedIds.map((selectId) => {
        if (itemId === selectId) {
          selectWrap.push(item);
        }
      });
      return selectWrap;
    })
    .flat();

  const totalNumber = selecteItemInfo.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);

  const totalPrice = selecteItemInfo?.reduce((prev, current) => {
    const itemPrice = current?.price * current?.quantity;
    return prev + itemPrice;
  }, 0);

  const getDiscountedPrice = (
    adjustedCoupon: RateCouponType | AmountCouponType,
    selecteItemInfo: ProductInfoType[],
  ) => {
    if (!adjustedCoupon) {
      return 0;
    }
    console.log(adjustedCoupon);
    if (adjustedCoupon?.type === 'rate') {
      console.log('비율 쿠폰 적용');
      const salePriceWrap: Array<number> = [];
      [...selecteItemInfo].map((selectItem) => {
        if (selectItem?.hasOwnProperty('availableCoupon')) {
          return selectItem.price;
        } else {
          const salePrice = selectItem.price / adjustedCoupon?.discountRate;
          salePriceWrap.push(salePrice);
        }
      });
      const sumOfSalePrice = salePriceWrap.reduce((sum, currentValue) => {
        return sum + currentValue;
      }, 0);
      return sumOfSalePrice;
    } else {
      console.log('정액 쿠폰 적용');
      if (
        selecteItemInfo.length === 1 &&
        selecteItemInfo[0]?.hasOwnProperty('availableCoupon')
      ) {
        return 0;
      } else {
        return adjustedCoupon?.discountAmount;
      }
    }
  };

  const totalValueOfSale =
    getDiscountedPrice(adjustedCoupon, selecteItemInfo) || 0;
  const FinalPrice = totalPrice - totalValueOfSale;

  return (
    <CartProceedWrap>
      <FlexBetweenBox>
        <span>담은 수량</span>
        <span>{totalNumber}개</span>
      </FlexBetweenBox>
      <FlexBetweenBox>
        <span>총 금액</span>
        <span>
          {selecteItemInfo.length ? FinalPrice.toLocaleString('ko-KR') : 0}원
        </span>
      </FlexBetweenBox>
      <FlexBetweenBox>
        <DialgButton onClick={onClickToggle} disabled={!selectedIds.length}>
          쿠폰 적용하기
        </DialgButton>
        <DialgButton
          onClick={() => {
            console.log('쿠폰제거');
            return eraseCoupons();
          }}
          disabled={!adjustedCoupon}
        >
          쿠폰 제거하기
        </DialgButton>
      </FlexBetweenBox>
    </CartProceedWrap>
  );
};

export default CartInformation;
