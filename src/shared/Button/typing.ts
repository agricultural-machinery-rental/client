import { ButtonHTMLAttributes } from 'react';

export type TButton = {
  label?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;
