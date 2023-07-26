import { HTMLAttributes } from 'react';

export type TCheckbox = {
  text: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
} & HTMLAttributes<HTMLDivElement>;
