'use client';

import React, { FC } from 'react';
import type { InputProps } from '@/components/UI/Input/typing';
import { StError, StInput, StInputContainer, StLabel } from '@/components/UI/Input/styled';

export const Input: FC<InputProps> = ({
  name,
  label,
  //register,
  required,
  error,
  errorMessage,
  placeholder,
  className,
  ...props
}) => {
  const options = {
    ...(required && { required: 'Поле не может быть пустым' }),
  };

  return (
    <StInputContainer>
      <StInput
        //{...register(name, options)}
        placeholder={placeholder || ''}
        className={className}
        id={name}
        {...props}
      />
      <StLabel htmlFor={name}>{label}</StLabel>
      {error && <StError>{errorMessage}</StError>}
    </StInputContainer>
  );
};
