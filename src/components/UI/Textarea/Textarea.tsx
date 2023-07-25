'use client';
import { ChangeEventHandler, FC } from 'react';
import { StTextarea } from './styled';
import { TTextarea } from './typing';

export const Textarea: FC<TTextarea> = ({ value, onChangeCallback, ...props }) => {
  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = e => {
    if (onChangeCallback) {
      onChangeCallback(e.target.value);
    }
  };

  return <StTextarea value={value} onChange={onChangeHandler} {...props} />;
};
