/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, ChangeEvent, useEffect } from 'react';
import CartItemCard from './CartItemCard';
import { css } from '@emotion/react';
import { useCartStore } from 'src/store/useCartStore';
import FlexBox from 'src/components/common/FlexBox';
import Button from 'src/components/common/Button';

const CartItems = () => {
  const { cart, getSelectedIds, removeCartAllItem } = useCartStore();
  const [checkedItems, setCheckedItems] = useState<string[] | []>([]);

  const handleSingleCheck = (checked: boolean, id: string) => {
    if (checked) {
      setCheckedItems((prev) => {
        return [...prev, id];
      });
    } else if (!checked) {
      console.log('here');
      setCheckedItems(
        checkedItems.filter((el) => {
          return el !== id;
        }),
      );
    }
  };

  const handleAllItemCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const checkedItemArray: Array<string> = [];
      cart.forEach((cartItem) => {
        return checkedItemArray.push(cartItem.item_no.toString());
      });
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

  if (!cart?.length) {
    return <FlexBox>카트에 아이템이 없습니다.</FlexBox>;
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
            checked={checkedItems.length === cart.length}
          />
          <span>전체선택</span>
        </FlexBox>
        <Button
          isBorder={true}
          themeId={'grey'}
          marginRight={'0px'}
          size={'MEDIUM'}
          onClick={() => {
            return removeCartAllItem();
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
        {cart.length &&
          cart?.map((cartItem, index) => {
            return (
              <CartItemCard
                key={index}
                cartItem={cartItem}
                handleSingleCheck={handleSingleCheck}
                checkedItems={checkedItems}
              />
            );
          })}
      </FlexBox>
    </div>
  );
};

export default CartItems;
