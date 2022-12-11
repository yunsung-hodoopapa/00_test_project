/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';
import Image from 'next/image';
import Button from 'src/components/common/Button';
import { useCartStore } from 'src/store/useCartStore';
import { useEffect } from 'react';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 250px;
  margin: 10px 10px;
  transition: all 250ms ease-in-out;
  border: 1px solid grey;
  border-radius: 8px;
`;

const ProductDescriptionWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductCard = (props: any) => {
  // eslint-disable-next-line no-unused-vars
  const {
    item: { item_no, item_name, detail_image_url, price, score },
  } = props;

  const { cart, addCartItem, removeCartItem } = useCartStore();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <StyledCard>
      <Image src={detail_image_url} width={250} height={250} alt="상품이미지" />
      <ProductDescriptionWrap>
        <span>{item_name}</span>
        <span>{price}</span>
      </ProductDescriptionWrap>
      <ProductButtonWrap>
        <Button onClick={() => removeCartItem(item_no)}>빼기</Button>
        <Button onClick={() => addCartItem(props.item)}>넣기 </Button>
      </ProductButtonWrap>
    </StyledCard>
  );
};

export default ProductCard;
