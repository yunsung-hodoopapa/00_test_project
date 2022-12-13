import React, { ReactElement, ReactNode, HTMLAttributes } from 'react';
import { css, SerializedStyles } from '@emotion/react';

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

const FlexBox = ({ children, ...props }: BoxProps): ReactElement => {
  return (
    <div css={flexBoxStyle} {...props}>
      {children}
    </div>
  );
};

export default FlexBox;
