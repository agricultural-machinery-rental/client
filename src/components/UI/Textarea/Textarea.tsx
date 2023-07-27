import { FC } from 'react';
import { type TTextarea, StTextarea } from './';
import { ValidationPattern } from '@/components/Form';

export const Textarea: FC<TTextarea> = ({
  name,
  value,
  resize,
  required,
  pattern,
  register,
  ...props
}) => {
  const registerOptions = {
    ...(required && { required: 'Поле не может быть пустым' }),
    ...(pattern && { pattern: ValidationPattern[pattern] }),
  };

  return (
    <StTextarea
      {...register(name, registerOptions)}
      name={name}
      value={value}
      $resize={resize}
      {...props}
    />
  );
};
