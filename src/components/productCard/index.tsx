/* eslint-disable arrow-body-style */
import { useCallback } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useCartStore } from 'src/store/useCartStore';
import FlexBox from 'src/components/common/FlexBox';
import { css } from '@emotion/react';
import useCart from 'src/hooks/useCart';
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
  transition: all 250ms ease-in-out;
  border-radius: 8px;
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
          width: 250px;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <FlexBox
          css={css`
            width: 180px;
            flex-direction: column;
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
