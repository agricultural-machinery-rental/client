'use client';

import type { TButton } from '@/components/UI/Button/typing';
import React, { FC } from 'react';
import { StButton } from './styled';

const Button: FC<TButton> = ({
  label,
  designType = 'primary',
  shape = 'round',
  sizeType = 'middle',
  ...props
}) => {
  const handleClick = () => {
    alert(label);
  };

  return (
    <StButton
      designType={designType}
      sizeType={sizeType}
      shape={shape}
      {...props}
      onClick={handleClick}
    >
      {label}
    </StButton>
  );
};

export default Button;
