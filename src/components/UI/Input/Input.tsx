'use client';

import React, { FC } from 'react';
import type { InputProps } from '@/components/UI/Input/typing';
import { StError, StInput } from '@/components/UI/Input/styled';

export const Input: FC<InputProps> = ({
  name,
  label,
  required,
  isError,
  errorMessage,
  placeholder,
  ...props
}) => {
  return (
    <>
      <StInput placeholder={placeholder || ''} id={name} {...props} />
      {isError && <StError>{errorMessage}</StError>}
    </>
  );
};
