import React, { ButtonHTMLAttributes } from 'react';

export type TButtonIcon = {
  icon: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
