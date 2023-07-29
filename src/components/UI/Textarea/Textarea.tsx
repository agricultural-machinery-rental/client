import { FC } from 'react';
import { StTextarea } from './styled';
import { TTextarea } from './typing';

export const Textarea: FC<TTextarea> = ({ name, resize, required, register, ...props }) => {
  return (
    <StTextarea $resize={resize} required={required} name={name} {...register?.(name)} {...props} />
  );
};
