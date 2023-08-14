import { FC } from 'react';

import { StTextarea, StTextareaContainer, StLabel } from './styled';
import { type TTextarea } from './typing';

export const Textarea: FC<TTextarea> = ({
  name,
  resize,
  register,
  label,
  watch,
  setValue,
  ...props
}) => (
  <StTextareaContainer>
    <StTextarea {...register} name={name} $resize={resize} {...props} />
    <StLabel htmlFor={name} $textareaValue={!!(name && watch?.(name))}>
      {label}
    </StLabel>
  </StTextareaContainer>
);
