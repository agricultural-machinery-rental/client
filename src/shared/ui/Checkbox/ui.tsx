import { FC } from 'react';

import CheckboxCheckedSVG from './assets/checked.svg';
import CheckboxUncheckedSVG from './assets/unchecked.svg';
import { StCheckboxContainer, StLabel } from './styled';
import { type TCheckbox } from './typing';

export const Checkbox: FC<TCheckbox> = ({ name, label, required, register, watch, ...props }) => {
  const id = `checkbox-${name}`;

  return (
    <StCheckboxContainer>
      <input id={id} type='checkbox' required={required} {...register} {...props} />
      {name && watch?.(name) ? <CheckboxCheckedSVG /> : <CheckboxUncheckedSVG />}
      <StLabel htmlFor={id}>{label}</StLabel>
    </StCheckboxContainer>
  );
};
