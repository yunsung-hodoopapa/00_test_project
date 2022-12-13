/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, ChangeEvent, useEffect } from 'react';
import CartItemCard from './CartItemCard';
import styled from '@emotion/styled';
import { useCartStore } from 'src/store/useCartStore';

const GridContainer = styled.div`
  display: grid;
  justify-content: space-between;
`;

const CartItems = () => {
  const { cart, getSelectedIds } = useCartStore();
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
    return <div>카트에 아이템이 없습니다.</div>;
  }

  return (
    <>
      <header>
        <input
          type="checkbox"
          onChange={handleAllItemCheck}
          checked={checkedItems.length === cart.length}
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
