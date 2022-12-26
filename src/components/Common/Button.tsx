import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import theme from 'src/styles/Theme';
import { themeId } from 'src/styles/emotion';

type ButtonStyleType = {
  marginRight: string;
  size?: 'SMALL' | 'MEDIUM' | 'LARGE';
  isBorder?: boolean;
  themeId?: themeId;
};

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleType {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
}

const Button = ({
  children,
  marginRight,
  size = 'MEDIUM',
  themeId,
  isBorder = true,
  onClick,
  disabled,
  isActive,
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
    backgroundColor: isActive ? `${theme[themeId!].hoverBackground}` : 'white',
    border: isBorder ? `1px solid ${theme[themeId!].background}` : 'none',
    color: isActive ? 'white' : `${theme[themeId!].color}`,
    outline: 'none',
    fontWeight: 'bold',
    wordBreak: 'keep-all',
    corsor: 'pointer',
    transition: '0.12s all ease-in',
    '&:disabled': {
      background: `${theme[themeId!].background}`,
      cursor: 'revert',
      transform: 'revert',
      color: 'white',
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
