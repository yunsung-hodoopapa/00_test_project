/* eslint-disable no-unused-vars */
import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Button from 'src/components/common/Button';
import { useCartStore } from 'src/store/useCartStore';
import FlexBox from 'src/components/common/FlexBox';
import { css } from '@emotion/react';
import { CartItemType } from 'src/type';

type CartCardType = {
  cartItem: CartItemType;
  handleSingleCheck?: (e: ChangeEvent<HTMLInputElement>) => void;
  checkedItems?: Array<string>;
};

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: 0 100px;
  padding: 4px;
`;

const CartOptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 100px;
`;

const IconWrapper = styled.div`
  display: flex;
  text-align: center;
  cursor: pointer;
`;

const CartItemCard = (props: CartCardType) => {
  const {
    cartItem: {
      item_no,
      item_name,
      detail_image_url,
      price,
      quantity,
      availableCoupon,
    },
    handleSingleCheck,
    checkedItems,
  } = props;

  const { removeCartItem, addCartItem } = useCartStore();

  const itemId = item_no.toString();

  const itemPrice = Number(price) * Number(quantity);

  return (
    <ItemWrap>
      <FlexBox
        css={css`
          align-items: center;
          box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
          gap: 4px;
        `}
      >
        <input
          type="checkbox"
          id={item_no.toString()}
          onChange={handleSingleCheck}
          checked={checkedItems?.includes(itemId) ? true : false}
        />
        <ImageWrapper>
          <Image
            src={detail_image_url}
            width={100}
            height={100}
            alt="상품이미지"
          />
        </ImageWrapper>
        <FlexBox
          css={css`
            align-items: flex-start;
            width: 70%;
            height: 120px;
            padding: 12px 0px;
            flex-basis: 1 200px;
          `}
        >
          <span>{item_name}</span>
        </FlexBox>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            height: 120px;
            padding: 8px 8px;
            gap: 1.5rem;
          `}
        >
          <IconWrapper
            onClick={() => {
              removeCartItem(item_no);
            }}
          >
            <Image
              height={15}
              width={15}
              color="white"
              src="/assets/trash_can.svg"
              alt="장바구니"
            />
          </IconWrapper>

          <FlexBox
            css={css`
              justify-content: center;
              flex: 1 100px;
              width: 70%;
              height: 30px;
            `}
          >
            <FlexBox
              css={css`
                justify-content: center;
                align-items: center;
                height: 30px;
                width: 30px;
                border: 1px solid #dae1e7;
              `}
            >
              <span>{quantity}</span>
            </FlexBox>
            <CartOptionWrap>
              <Button
                isBorder={true}
                themeId={'grey'}
                marginRight={'0px'}
                size={'SMALL'}
                onClick={() => {
                  addCartItem(props.cartItem);
                }}
              >
                ⬆
              </Button>
              <Button
                isBorder={true}
                themeId={'grey'}
                marginRight={'0px'}
                size={'SMALL'}
                disabled={Number(quantity) === 1}
                onClick={() => {
                  removeCartItem(item_no);
                }}
              >
                ⬇
              </Button>
            </CartOptionWrap>
          </FlexBox>
          <span>
            {itemPrice?.toLocaleString('ko-KR')}원 <br />{' '}
            {availableCoupon === false && (
              <span
                css={css`
                  font-size: 1.2rem;
                  color: red;
                `}
              >
                할인불가
              </span>
            )}
          </span>
        </div>
      </FlexBox>
    </ItemWrap>
  );
};

export default CartItemCard;
