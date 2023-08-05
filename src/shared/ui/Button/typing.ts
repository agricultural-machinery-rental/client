import { ButtonHTMLAttributes } from 'react';

export type TButton = {
  label?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
