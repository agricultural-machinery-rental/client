'use client';

import React, { FC } from 'react';
import { type TInputProps, StError, StInput } from './';
import { ValidationPattern } from '@/components/Form';

export const Input: FC<TInputProps> = ({
  name,
  placeholder,
  errorMessage,
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
    <>
      <StInput
        {...register(name, registerOptions)}
        placeholder={placeholder || ''}
        name={name}
        {...props}
      />
      {errorMessage && <StError>{errorMessage}</StError>}
    </>
  );
};
