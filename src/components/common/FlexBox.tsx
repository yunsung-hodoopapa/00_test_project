import React, { ReactNode, HTMLAttributes } from 'react';
import { css } from '@emotion/react';

type BoxStyleType = {
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  fontSize?: string;
};

interface BoxProps extends HTMLAttributes<HTMLElement>, BoxStyleType {
  children: ReactNode;
  className?: string;
}

const flexBoxStyle = css`
  display: flex;
`;

const FlexBox = ({ children, ...props }: BoxProps) => (
  <div css={flexBoxStyle} {...props}>
    {children}
  </div>
);

export default FlexBox;
