import React, { FC } from 'react';

import { StInput, StLabel, StInputContainer } from './styled';
import { type TInput } from './typing';

export const Input: FC<TInput> = ({ name, register, label, watch, ...props }) => (
  <StInputContainer>
    <StInput {...register} name={name} {...props} />
    <StLabel htmlFor={name} $inputValue={!!(name && watch?.(name))}>
      {label}
    </StLabel>
  </StInputContainer>
);
