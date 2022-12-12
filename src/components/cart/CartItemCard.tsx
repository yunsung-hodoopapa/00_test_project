import styled from '@emotion/styled';
import Image from 'next/image';
import Button from 'src/components/common/Button';
import { useCartStore } from 'src/store/useCartStore';

const ItemWrap = styled.div`
  width: 100%;
  border: 1px solid purple;
  border-radius: 8px;
  padding: 8px;
  margin: 8px 16px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const CartOptionWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CartItemCard = (props) => {
  const {
    cartItem: { item_no, item_name, detail_image_url, price, score, quantity },
  } = props;

  const { removeCartItem, addCartItem } = useCartStore();

  return (
    <ItemWrap>
      <FlexBox>
        <input type="checkbox" />
        <ImageWrapper>
          <Image
            src={detail_image_url}
            width={150}
            height={150}
            alt="상품이미지"
          />
        </ImageWrapper>
        <ContentWrapper>
          <span>
            {item_name} x {quantity}
          </span>
          <span>{price.toLocaleString('ko-KR')}원</span>
        </ContentWrapper>
      </FlexBox>
      <CartOptionWrap>
        <Button
          onClick={() => {
            return removeCartItem(item_no);
          }}
        >
          -
        </Button>
        <Button
          onClick={() => {
            return addCartItem(props.cartItem);
          }}
        >
          +
        </Button>
      </CartOptionWrap>
    </ItemWrap>
  );
};

export default CartItemCard;
