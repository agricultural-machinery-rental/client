import { StCheckboxContainer, StCheckboxWrapper } from './styled';
import { type TCheckbox } from './typing';
import { FC } from 'react';
import CheckboxUncheckedSVG from '@/assets/icons/checkbox-unchecked.svg';
import CheckboxCheckedSVG from '@/assets/icons/checkbox-checked.svg';

export const Checkbox: FC<TCheckbox> = ({ text, checked = false, onChange, ...props }) => {
  return (
    <StCheckboxWrapper {...props}>
      <StCheckboxContainer onClick={onChange}>
        {checked ? <CheckboxCheckedSVG /> : <CheckboxUncheckedSVG />}
        <span>{text}</span>
      </StCheckboxContainer>
    </StCheckboxWrapper>
  );
};
