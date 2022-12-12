import { useCartStore } from 'src/store/useCartStore';
import styled from '@emotion/styled';

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
  width: 160px;
  height: 48px;
  background-color: blueviolet;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const CartInformation = ({ onClickToggleModal }) => {
  const { cart } = useCartStore();

  if (!cart.length) {
    return <div></div>;
  }

  const totalNumber = cart.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);

  const totalCost = cart.reduce((prev, current) => {
    const item = cart.find((f) => {
      return f.item_no === current.item_no;
    });
    const itemPrice = item!.price * current.quantity;
    return prev + itemPrice;
  }, 0);

  return (
    <CartProceedWrap>
      <FlexBetweenBox>
        <span>담은 수량</span>
        <span>{totalNumber}개</span>
      </FlexBetweenBox>
      <FlexBetweenBox>
        <span>총 금액</span>
        <span>{totalCost.toLocaleString('ko-KR')}원</span>
      </FlexBetweenBox>
      <DialgButton onClick={onClickToggleModal}>쿠폰 적용하기 </DialgButton>
    </CartProceedWrap>
  );
};

export default CartInformation;
