import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 40px;
  margin-left: -20px;
`;

export const Button = styled.button`
  cursor: pointer;
  &:disbled {
    color: #e2e2e2;
    cursor: default;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;

type PageType = {
  selected: boolean;
};

export const Page = styled.a<PageType>`
  padding: 4px 6px;
  background-color: ${({ selected }) => (selected ? '#000' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  font-size: 20px;

  ${({ selected }) =>
    selected &&
    css`
      pointer-events: none;
    `}

  // 인접 형제 결합자 
  // https://developer.mozilla.org/ko/docs/Web/CSS/Adjacent_sibling_combinator

  & + & {
    margin-left: 4px;
  }

  &:disabled {
    cursor: default;
  }
`;
