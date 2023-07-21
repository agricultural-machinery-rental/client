'use client';

import type { TButton } from '@/components/UI/Button/typing';
import React, { FC } from 'react';
import { StButton } from './styled';

const Button: FC<TButton> = ({ label, $designType }) => {
  const handleClick = () => {
    alert(label);
    alert(label);
  };

  return (
    <StButton $designType={$designType} onClick={handleClick}>
      {label}
    </StButton>
  );
};

export default Button;
