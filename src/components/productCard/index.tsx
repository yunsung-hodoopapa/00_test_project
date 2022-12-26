/* eslint-disable arrow-body-style */
import { useCallback } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useCartStore } from 'src/store/useCartStore';
import useCart from 'src/hooks/useCart';
import FlexBox from 'src/components/Common/FlexBox';
import Image from 'next/image';
import { ProductInfoType } from 'src/type';

type CardType = {
  item: ProductInfoType;
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 250px;
  margin: 10px 10px;
  border-radius: 8px;
  transition: all 250ms ease-in-out;
`;

const QuantitySelectorWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`;

const ProductCard = (props: CardType) => {
  const {
    item: { item_no, item_name, detail_image_url, price },
  } = props;

  const { addCartItem, removeCartItem } = useCartStore();
  const { userCart } = useCart();

  const isStored = userCart.find((item) => item.item_no === item_no);

  const onClickToggleCart = useCallback(() => {
    if (!isStored) {
      addCartItem(props.item);
    } else {
      removeCartItem(item_no);
    }
  }, [addCartItem, isStored, item_no, props.item, removeCartItem]);

  return (
    <StyledCard>
      <Image src={detail_image_url} width={250} height={250} alt="상품이미지" />
      <FlexBox
        css={css`
          justify-content: space-between;
          align-items: center;
          width: 250px;
        `}
      >
        <FlexBox
          css={css`
            flex-direction: column;
            width: 180px;
            padding: 4px 2px;
          `}
        >
          <span
            css={css`
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            `}
          >
            {item_name}
          </span>
          <span>{price?.toLocaleString('ko-KR')}원</span>
        </FlexBox>
        <QuantitySelectorWrap>
          <IconWrapper onClick={() => onClickToggleCart()}>
            <Image
              height={25}
              width={25}
              src={
                isStored
                  ? '/assets/remove_basket.svg'
                  : '/assets/add_basket.svg'
              }
              alt="장바구니"
            />
          </IconWrapper>
        </QuantitySelectorWrap>
      </FlexBox>
    </StyledCard>
  );
};

export default ProductCard;
