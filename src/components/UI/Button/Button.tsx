'use client';

import React, { FC } from 'react';
import type { TButton } from '@/components/UI/Button/typing';
import { StButton } from './styled';

export const Button: FC<TButton> = ({ label, isDisabled = false, ...props }) => {
  return (
    <StButton disabled={isDisabled} {...props}>
      {label}
    </StButton>
  );
};
