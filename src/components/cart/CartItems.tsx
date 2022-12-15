/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, ChangeEvent, useEffect } from 'react';
import CartItemCard from './CartItemCard';
import { css } from '@emotion/react';
import { useCartStore } from 'src/store/useCartStore';
import FlexBox from 'src/components/common/FlexBox';
import Button from 'src/components/common/Button';
import useCart from 'src/hooks/useCart';

const CartItems = () => {
  const { cart, getSelectedIds, removeCartAllItem, eraseCoupons } =
    useCartStore();
  const { userCart } = useCart();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleSingleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target;
    if (checked) {
      setCheckedItems((prev) => [...prev, id]);
    } else if (!checked) {
      setCheckedItems(checkedItems.filter((el) => el !== id));
    }
  };

  const handleAllItemCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const checkedItemArray: Array<string> = [];
      cart.forEach((cartItem) =>
        checkedItemArray.push(cartItem.item_no.toString()),
      );
      setCheckedItems(checkedItemArray);
    } else if (!e.target.checked) {
      setCheckedItems([]);
    } else if (!checkedItems.length) {
      setCheckedItems([]);
    }
  };

  useEffect(() => {
    getSelectedIds(checkedItems);
  }, [checkedItems]);

  if (!userCart?.length) {
    return (
      <FlexBox>
        <span>카트에 아이템이 없습니다.</span>
      </FlexBox>
    );
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <header
        css={css`
          display: flex;
          flex-direction: center;
          justify-content: space-between;
          padding: 8px 0px;
        `}
      >
        <FlexBox
          css={css`
            justify-content: center;
            align-items: center;
            gap: 6px;
          `}
        >
          <input
            type="checkbox"
            onChange={handleAllItemCheck}
            checked={checkedItems.length === userCart.length}
          />
          <span>전체선택</span>
        </FlexBox>
        <Button
          isBorder={true}
          themeId={'grey'}
          marginRight={'0px'}
          size={'MEDIUM'}
          onClick={() => {
            removeCartAllItem();
            eraseCoupons();
          }}
        >
          제거하기
        </Button>
      </header>
      <hr
        css={css`
          width: 100%;
          height: 3px;
          margin-bottom: 8px;
          background-color: grey;
        `}
      />
      <FlexBox
        css={css`
          flex-direction: column;
          justify-content: flex-start;
          gap: 1rem;
        `}
      >
        {userCart.length &&
          userCart?.map((cartItem, index) => (
            <CartItemCard
              key={index}
              cartItem={cartItem}
              handleSingleCheck={handleSingleCheck}
              checkedItems={checkedItems}
            />
          ))}
      </FlexBox>
    </div>
  );
};

export default CartItems;
