import React, { FC } from 'react';
import { type TInputProps, StInput, StLabel, StInputContainer } from './';

export const Input: FC<TInputProps> = ({ name, register, label, watch, ...props }) => (
  <StInputContainer>
    <StInput {...register} name={name} {...props} />
    <StLabel htmlFor={name} $inputValue={!!watch(name) ?? true}>
      {label}
    </StLabel>
  </StInputContainer>
);
