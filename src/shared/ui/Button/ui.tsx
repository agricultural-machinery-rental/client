'use client';

import React, { FC } from 'react';

import { StButton } from './styled';
import type { TButton } from './typing';

export const Button: FC<TButton> = ({ label, ...props }) => {
  return <StButton {...props}>{label}</StButton>;
};
