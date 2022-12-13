import React, { ReactElement, ReactNode, ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';

type BoxStyleType = {
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  fontSize?: string;
};

interface BoxProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BoxStyleType {
  children: ReactNode;
  className?: string;
}

const flexBoxStyle = css`
  display: flex;
`;

const FlexBox = ({ children, ...props }: BoxProps): ReactElement => {
  return (
    <div css={flexBoxStyle} {...props}>
      {children}
    </div>
  );
};

FlexBox.defaultProps = {
  display: 'flex',
};

export default FlexBox;
