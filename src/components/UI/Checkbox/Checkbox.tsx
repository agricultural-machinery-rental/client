'use client';

import { StCheckboxContainer, StCheckboxWrapper } from './styled';
import { type TCheckbox } from './typing';
import { FC } from 'react';
import CheckboxUncheckedSVG from '@/assets/icons/checkbox-unchecked.svg';
import CheckboxCheckedSVG from '@/assets/icons/checkbox-checked.svg';

export const Checkbox: FC<TCheckbox> = ({ text, checked = false, onChange, ...props }) => {
  const onChangeHandler = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <StCheckboxWrapper {...props}>
      <StCheckboxContainer onClick={onChangeHandler}>
        {checked ? <CheckboxCheckedSVG /> : <CheckboxUncheckedSVG />}
        {/*<CheckboxCheckedSVG />*/}
        <span>{text}</span>
      </StCheckboxContainer>
    </StCheckboxWrapper>
  );
};
