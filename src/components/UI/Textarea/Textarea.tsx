import { FC } from 'react';
import { type TTextarea, StTextarea, StTextareaContainer, StLabel } from './';

export const Textarea: FC<TTextarea> = ({
  name,
  resize,
  register,
  label,
  watch,
  registerOptions,
  ...props
}) => (
  <StTextareaContainer>
    <StTextarea {...register(name, registerOptions)} name={name} $resize={resize} {...props} />
    <StLabel htmlFor={name} $textareaValue={watch(name) ? true : false}>
      {label}
    </StLabel>
  </StTextareaContainer>
);
