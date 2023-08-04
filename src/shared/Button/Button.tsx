'use client';

import React, { FC } from 'react';
import type { TButton } from '@/shared/Button/typing';
import { StButton } from './styled';

export const Button: FC<TButton> = ({ label, ...props }) => {
  return <StButton {...props}>{label}</StButton>;
};
