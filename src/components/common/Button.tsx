import React, { ReactElement, ReactNode, ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

type ButtonStyleType = {
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  fontSize?: string;
};

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleType {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

const CustomButton = styled.button`
  width: auto;
  height: auto;
  border-color: grey;
  border-radius: 6px;
  color: tomato;
  size: 1rem;
`;

const Button = ({ children, ...rest }: ButtonProps): ReactElement => {
  return <CustomButton {...rest}>{children}</CustomButton>;
};

export default Button;
