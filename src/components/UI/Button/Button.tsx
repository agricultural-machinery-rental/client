'use client';

import React, { FC } from 'react';
import { StButton } from './styled';

export type TButton = {
  label?: string;
  $designType?: 'primary' | 'secondary';
};

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
