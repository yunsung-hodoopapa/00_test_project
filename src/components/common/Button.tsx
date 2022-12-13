import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import theme from 'src/styles/theme';
import { themeId } from 'src/styles/emotion';
import { css } from '@emotion/react';

type ButtonStyleType = {
  marginRight: string;
  size?: 'SMALL' | 'MEDIUM' | 'LARGE';
  isBorder: boolean;
  themeId?: themeId;
};

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleType {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  marginRight,
  size = 'MEDIUM',
  themeId,
  isBorder = true,
  onClick,
  disabled,
}: ButtonProps) => {
  const height =
    size === 'SMALL' ? '1.5rem' : size === 'MEDIUM' ? '2rem' : '3rem';
  const padding =
    size === 'SMALL' ? '0.75rem' : size === 'MEDIUM' ? '1rem' : '2rem';
  const fontSize =
    size === 'SMALL' ? '0.9rem' : size === 'MEDIUM' ? '1rem' : '1.5rem';
  const borderRadius =
    size === 'SMALL' ? '0.25rem' : size === 'MEDIUM' ? '0.75rem' : '1rem';

  const buttonStyle = css({
    paddingLeft: `${padding}`,
    paddingRight: `${padding}`,
    marginRight: `${marginRight}`,
    fontSize: `${fontSize}`,
    borderRadius: `${borderRadius}`,
    height: `${height}`,
    backgroundColor: isBorder ? 'white' : `${theme[themeId]?.background}`,
    border: isBorder ? `1px solid ${theme[themeId]?.background}` : 'none',
    color: isBorder
      ? `${theme[themeId]?.color}`
      : `${theme[themeId]?.background}`,
    outline: 'none',
    fontWeight: 'bold',
    wordBreak: 'keep-all',
    corsor: 'pointer',
    transition: '0.12s all ease-in',
    '&:hover': {
      background: `${theme[themeId]?.background}`,
      color: 'white',
    },
    '&:disabled': {
      background: 'grey',
      cursor: 'revert',
      transform: 'revert',
      color: 'black',
    },
  });

  return (
    <>
      <button css={buttonStyle} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default Button;
