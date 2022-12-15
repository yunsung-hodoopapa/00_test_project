/* eslint-disable no-prototype-builtins */
import { useEffect } from 'react';
import { useCartStore } from 'src/store/useCartStore';
import styled from '@emotion/styled';
import {
  ProductInfoType,
  RateCouponType,
  AmountCouponType,
} from 'src/type/index';
import { useModalStore } from 'src/store/useModalStore';
import Button from 'src/components/common/Button';
import FlexBox from 'src/components/common/FlexBox';
import { css } from '@emotion/react';
import useCart from 'src/hooks/useCart';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 16px;
  border: none;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
`;

const FlexBetweenBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartInformation = () => {
  const { selectedIds, adjustedCoupon, eraseCoupons } = useCartStore();
  const { onClickToggle } = useModalStore();
  const { userCart } = useCart();

  // 선택된 아이템만 결제금액을 계산 하도록 함수 추가
  const selecteItemInfo = userCart
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
    adjustedCoupon: RateCouponType | AmountCouponType | '',
    selecteItemInfo: ProductInfoType[],
  ) => {
    if (!adjustedCoupon) {
      return 0;
    }
    if (adjustedCoupon?.type === 'rate') {
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

  const checkoutPrice = totalPrice - totalValueOfSale;

  useEffect(() => {
    if (checkoutPrice < 0) {
      eraseCoupons();
      window.alert(
        '할인 금액보다 구매가격이 적을 경우 쿠폰을 적용할 수 없습니다',
      );
    }
  }, [checkoutPrice, eraseCoupons]);

  if (!userCart.length) {
    return <div></div>;
  }

  return (
    <Container>
      <div>
        <h2>결제예상금액</h2>
        <FlexBox
          css={css`
            flex-direction: column;
            gap: 10px;
          `}
        >
          <FlexBetweenBox>
            <span>담은 수량</span>
            <span>{totalNumber}개</span>
          </FlexBetweenBox>
          <FlexBetweenBox>
            <span>할인</span>
            <span>{totalValueOfSale.toLocaleString('ko-KR')}원</span>
          </FlexBetweenBox>
          {adjustedCoupon && (
            <FlexBetweenBox>
              <span>적용 쿠폰</span>
              <span>{adjustedCoupon.title}</span>
            </FlexBetweenBox>
          )}
          <FlexBetweenBox>
            <span>총 금액</span>
            <span>
              {selecteItemInfo.length
                ? checkoutPrice.toLocaleString('ko-KR')
                : 0}
              원
            </span>
          </FlexBetweenBox>
        </FlexBox>
      </div>
      <FlexBox
        css={css`
          justify-content: space-between;
          gap: 10px;
        `}
      >
        <Button
          isBorder={true}
          themeId={'grey'}
          marginRight={'0px'}
          size={'LARGE'}
          onClick={() => {
            return onClickToggle();
          }}
          disabled={!selectedIds.length}
        >
          쿠폰 적용
        </Button>

        <Button
          isBorder={true}
          themeId={'grey'}
          marginRight={'0px'}
          size={'LARGE'}
          onClick={() => {
            return eraseCoupons();
          }}
          disabled={!selectedIds.length || !adjustedCoupon}
        >
          쿠폰 제거
        </Button>
      </FlexBox>
    </Container>
  );
};

export default CartInformation;
