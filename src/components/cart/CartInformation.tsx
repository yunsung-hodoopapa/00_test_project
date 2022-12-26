/* eslint-disable no-prototype-builtins */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useCartStore } from 'src/store/useCartStore';
import { useModalStore } from 'src/store/useModalStore';
import useCart from 'src/hooks/useCart';
import Button from 'src/components/common/Button';
import FlexBox from 'src/components/common/FlexBox';
import { ProductInfoType, CouponType } from 'src/types/index';

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

  const totalNumber = selecteItemInfo.reduce(
    (prev, current) => prev + current.quantity,
    0,
  );

  const totalPrice = selecteItemInfo?.reduce((prev, current) => {
    const itemPrice = current?.price * current?.quantity;
    return prev + itemPrice;
  }, 0);

  const getDiscountedPrice = (
    adjustedCoupon: CouponType,
    selecteItemInfo: ProductInfoType[],
  ) => {
    if (!adjustedCoupon) {
      return 0;
    }
    // 비율할인일 경우, 선택 아이템을 조회해서 할인 가능한 금액만 계산해서 리턴한다.
    if (adjustedCoupon?.type === 'rate') {
      const salePriceWrap: Array<number> = [];
      [...selecteItemInfo].map((selectItem) => {
        if (selectItem?.hasOwnProperty('availableCoupon')) {
          salePriceWrap.push(0);
        } else {
          const salePrice = selectItem.price / adjustedCoupon.discountRate;
          salePriceWrap.push(salePrice);
        }
      });
      const sumOfSalePrice = salePriceWrap.reduce(
        (sum, currentValue) => sum + currentValue,
        0,
      );
      if (sumOfSalePrice === 0) {
        // 할인불가능한 상태임으로 쿠폰을 제거한다.
        eraseCoupons();
        return window.alert('할인 쿠폰을 적용할 수 없습니다.');
      }
      return sumOfSalePrice;
    } else {
      // 정액 할인일 경우, 선택 아이템을 조회해서 할인 가능 여부를 조회 후 총 가격이 정액할인액보다 높은지 판단한다.
      const couponValiditemPriceWrap: Array<number> = [];
      [...selecteItemInfo].map((selectItem) => {
        if (selectItem?.hasOwnProperty('availableCoupon')) {
          couponValiditemPriceWrap.push(0);
        } else {
          couponValiditemPriceWrap.push(selectItem.price);
        }
      });
      const sumOfSalePrice = couponValiditemPriceWrap.reduce(
        (sum, currentValue) => sum + currentValue,
        0,
      );
      if (sumOfSalePrice < adjustedCoupon.discountAmount) {
        // 할인불가능한 상태임으로 쿠폰을 제거한다.
        eraseCoupons();
        return window.alert('할인 쿠폰을 적용할 수 없습니다.');
      } else {
        return adjustedCoupon.discountAmount;
      }
    }
  };

  const totalValueOfSale =
    getDiscountedPrice(adjustedCoupon, selecteItemInfo) || 0;

  const checkoutPrice = totalPrice - totalValueOfSale;

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
          {adjustedCoupon.type && (
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
          onClick={() => onClickToggle()}
          disabled={!selectedIds.length}
        >
          쿠폰 적용
        </Button>

        <Button
          isBorder={true}
          themeId={'grey'}
          marginRight={'0px'}
          size={'LARGE'}
          onClick={() => eraseCoupons()}
          disabled={!selectedIds.length || !adjustedCoupon.type}
        >
          쿠폰 제거
        </Button>
      </FlexBox>
    </Container>
  );
};

export default CartInformation;
