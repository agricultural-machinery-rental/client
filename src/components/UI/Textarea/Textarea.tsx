'use client';
import { ChangeEventHandler, FC } from 'react';
import { StTextarea } from './styled';
import { TTextarea } from './typing';

export const Textarea: FC<TTextarea> = ({ value, onChange, ...props }) => {
  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = e => {
    e.preventDefault();
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return <StTextarea value={value} onChange={onChangeHandler} {...props} />;
};
