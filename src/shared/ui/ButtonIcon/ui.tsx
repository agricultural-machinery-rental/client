'use client';

import React, { FC } from 'react';

import type { TButton } from '../Button/typing';

import { StButtonIcon } from './styled';

interface ButtonIconProps extends TButton {
  icon: React.ReactNode;
}

export const ButtonIcon: FC<ButtonIconProps> = ({ icon, ...props }) => {
  return <StButtonIcon {...props}>{icon}</StButtonIcon>;
};
