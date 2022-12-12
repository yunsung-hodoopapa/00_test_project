import React, { useState, ChangeEvent } from 'react';
import { useCartStore } from 'src/store/useCartStore';
import CartItemCard from './CartItemCard';
import styled from '@emotion/styled';
import { f } from 'msw/lib/SetupApi-b2f0e5ac';

const GridContainer = styled.div`
  display: grid;
  justify-content: space-between;
`;

const CartItems = () => {
  const { cart } = useCartStore();
  // const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
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
      console.log('전체선택 해제');
      setCheckedItems([]);
    }
  };

  if (!cart?.length) {
    return <div>카트에 아이템이 없습니다.</div>;
  }

  return (
    <>
      <header>
        <input
          type="checkbox"
          onChange={handleAllItemCheck}
          disabled={!checkedItems.length}
        />
      </header>
      <GridContainer>
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
      </GridContainer>
    </>
  );
};

export default CartItems;
