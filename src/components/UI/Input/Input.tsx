import React, { FC } from 'react';
import { type TInputProps, StInput, StLabel, StInputContainer } from './';

export const Input: FC<TInputProps> = ({
  name,
  register,
  label,
  watch,
  registerOptions,
  ...props
}) => (
  <StInputContainer>
    <StInput {...register(name, registerOptions)} name={name} {...props} />
    <StLabel htmlFor={name} $inputValue={watch(name) ? true : false}>
      {label}
    </StLabel>
  </StInputContainer>
);
