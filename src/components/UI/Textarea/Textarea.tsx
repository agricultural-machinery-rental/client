import { FC } from 'react';
import { type TTextarea, StTextarea, StTextareaContainer, StLabel } from './';

export const Textarea: FC<TTextarea> = ({ name, resize, register, label, watch, ...props }) => (
  <StTextareaContainer>
    <StTextarea {...register} name={name} $resize={resize} {...props} />
    <StLabel htmlFor={name} $textareaValue={!!watch(name)}>
      {label}
    </StLabel>
  </StTextareaContainer>
);
