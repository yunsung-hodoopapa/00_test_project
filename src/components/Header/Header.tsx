import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useCart from 'src/hooks/useCart';
import Image from 'next/image';
import Link from 'next/link';

// style 모듈을 분리해서 관심사 분리
import * as Styled from './Header.style';

const Header = () => {
  const router = useRouter();
  const { userCart } = useCart();
  return (
    <Styled.Header>
      {/* next/link를 사용해서 헤더의 타이틀을 조금 더 시멘틱하게 바꿈 */}
      <Link href="/products">
        <Styled.Title>호두파파 스토어</Styled.Title>
      </Link>
      <Link href="/cart">
        <Styled.IconWrapper>
          <Image
            height={25}
            width={25}
            color="white"
            src="/assets/ico_cart.svg"
            alt="장바구니"
          />
          <Styled.CartQuantityWrap>{userCart.length}</Styled.CartQuantityWrap>
        </Styled.IconWrapper>
      </Link>
    </Styled.Header>
  );
};

export default Header;
