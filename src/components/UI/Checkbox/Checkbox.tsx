import { StCheckboxContainer, StCheckboxWrapper } from './styled';
import { type TCheckbox } from './typing';
import { FC } from 'react';
import CheckboxUncheckedSVG from '@/assets/icons/checkbox-unchecked.svg';
import CheckboxCheckedSVG from '@/assets/icons/checkbox-checked.svg';

export const Checkbox: FC<TCheckbox> = ({ name, label, required, register, watch, ...props }) => {
  const id = `checkbox-${name}`;

  return (
    <StCheckboxWrapper>
      <StCheckboxContainer>
        <input id={id} type='checkbox' required={required} {...register} {...props} />
        {watch(name) ? <CheckboxCheckedSVG /> : <CheckboxUncheckedSVG />}
        <label htmlFor={id}>
          {label}
          {required && '*'}
        </label>
      </StCheckboxContainer>
    </StCheckboxWrapper>
  );
};
