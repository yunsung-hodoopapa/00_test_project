import { useEffect } from 'react';
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
    handleSingleCheck,
    checkedItems,
  } = props;

  const { removeCartItem, addCartItem } = useCartStore();

  const itemId = item_no.toString();

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  return (
    <ItemWrap>
      <FlexBox>
        <input
          type="checkbox"
          id={item_no}
          onChange={(e) => {
            return handleSingleCheck(e.target.checked, e.target.id);
          }}
          checked={checkedItems.includes(itemId) ? true : false}
        />
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
          <span>{price?.toLocaleString('ko-KR')}원</span>
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
