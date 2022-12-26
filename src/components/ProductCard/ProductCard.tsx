/* eslint-disable arrow-body-style */
import { useCallback } from 'react';
import { useCartStore } from 'src/store/useCartStore';
import useCart from 'src/hooks/useCart';
import Image from 'next/image';
import * as Styled from './ProductCard.style';
import { ProductInfoType } from 'src/types';

type ProductItemProps = {
  product: ProductInfoType;
};

const ProductCard = (props: ProductItemProps) => {
  const {
    product: { item_no, item_name, detail_image_url, price },
  } = props;

  const { addCartItem, removeCartItem } = useCartStore();
  const { userCart } = useCart();

  const isStored = userCart.find((item) => item.item_no === item_no);

  const onClickToggleCart = useCallback(() => {
    if (!isStored) {
      addCartItem(props.product);
    } else {
      removeCartItem(item_no);
    }
  }, [addCartItem, isStored, item_no, props.product, removeCartItem]);

  return (
    <Styled.Card>
      <Image src={detail_image_url} width={250} height={250} alt="상품이미지" />
      <Styled.ProductDesctiptionWrap>
        <Styled.Box>
          <Styled.ItemName>{item_name}</Styled.ItemName>
          <span>{price?.toLocaleString('ko-KR')}원</span>
        </Styled.Box>
        <Styled.QuantitySelectorWrap>
          <Styled.IconWrapper onClick={() => onClickToggleCart()}>
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
          </Styled.IconWrapper>
        </Styled.QuantitySelectorWrap>
      </Styled.ProductDesctiptionWrap>
    </Styled.Card>
  );
};

export default ProductCard;
