import { StCheckboxContainer, StCheckboxWrapper } from './styled';
import { type TCheckbox } from './typing';
import { FC, useRef } from 'react';
import CheckboxUncheckedSVG from '@/assets/icons/checkbox-unchecked.svg';
import CheckboxCheckedSVG from '@/assets/icons/checkbox-checked.svg';
import { v4 } from 'uuid';

export const Checkbox: FC<TCheckbox> = ({ name, label, required, register, ...props }) => {
  const id = v4();

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    inputRef.current?.click();
  };

  return (
    <StCheckboxWrapper onClick={onClickHandler}>
      <StCheckboxContainer>
        <input
          id={id}
          ref={inputRef}
          type='checkbox'
          required={required}
          name={name}
          {...register?.(name)}
          {...props}
        />
        {inputRef.current?.checked ? <CheckboxCheckedSVG /> : <CheckboxUncheckedSVG />}
        <label htmlFor={id}>
          {label}
          {required && '*'}
        </label>
      </StCheckboxContainer>
    </StCheckboxWrapper>
  );
};
