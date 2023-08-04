'use client';

import React, { FC } from 'react';
import type { TButton } from '@/shared/Button/typing';
import { StButton } from './styled';

export const Button: FC<TButton> = ({ label, disabled = false, onClick, ...props }) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <StButton onClick={handleClick} disabled={disabled} {...props}>
      {label}
    </StButton>
  );
};
