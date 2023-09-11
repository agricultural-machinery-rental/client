import React, { FC, useState } from 'react';

import EyeOff from './assets/eye-off.svg';
import Eye from './assets/eye.svg';
import { passwordInputTypes } from './consts';
import { StContainer, StIcon, StInputContainer, StInput, StLabel } from './styled';
import { TPasswordInput } from './typing';

export const PasswordInput: FC<TPasswordInput> = ({
  type,
  name,
  register,
  label,
  placeholder,
  watch,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleType = () => {
    inputType === passwordInputTypes.password
      ? setInputType(passwordInputTypes.text)
      : setInputType(passwordInputTypes.password);
  };

  return (
    <StContainer>
      <StInputContainer>
        <StInput type={inputType} {...register} name={name} placeholder={placeholder} {...props} />
        {!placeholder && (
          <StLabel htmlFor={name} $inputValue={!!(name && watch?.(name))}>
            {label}
          </StLabel>
        )}
      </StInputContainer>
      <StIcon onClick={toggleType}>{inputType === 'password' ? <Eye /> : <EyeOff />}</StIcon>
    </StContainer>
  );
};
