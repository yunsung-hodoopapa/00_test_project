import { useCartStore } from 'src/store/useCartStore';
import CartItemCard from './CartItemCard';
import styled from '@emotion/styled';

const GridContainer = styled.div`
  display: grid;
  justify-content: space-between;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FlexBox = styled.div`
  margin: 8px;
`;

const GridItem = styled.div`
  display: grid;
`;

const CartItems = () => {
  const { cart } = useCartStore();

  if (!cart.length) {
    return <div>카트에 아이템이 없습니다.</div>;
  }

  return (
    <>
      <FlexWrap>
        <GridContainer>
          <GridItem>
            <input type="checkbox" />
          </GridItem>
        </GridContainer>
        <FlexBox>
          <span>구매불가 삭제</span>
        </FlexBox>
        <FlexBox> | </FlexBox>
        <FlexBox>
          <span>선택상품 삭제</span>
        </FlexBox>
      </FlexWrap>
      <GridContainer>
        {cart.length &&
          cart?.map((cartItem, index) => {
            return <CartItemCard key={index} cartItem={cartItem} />;
          })}
      </GridContainer>
    </>
  );
};

export default CartItems;
