import React, { FC } from 'react';

import { StInput, StLabel, StInputContainer } from './styled';
import { type TInput } from './typing';

// TODO передавать setValue только в те компоненты, которые его требуют
export const Input: FC<TInput> = ({ name, register, label, watch, setValue, ...props }) => (
  <StInputContainer>
    <StInput {...register} name={name} {...props} />
    <StLabel htmlFor={name} $inputValue={!!(name && watch?.(name))}>
      {label}
    </StLabel>
  </StInputContainer>
);
