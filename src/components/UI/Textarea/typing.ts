import { HTMLAttributes } from 'react';

export type TTextarea = {
  value?: string;
  placeholder?: string;
  onChangeCallback?: (value: string) => void;
  resize?: boolean;
} & HTMLAttributes<HTMLTextAreaElement>;
