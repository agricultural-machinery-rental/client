import React, { FC, useState } from 'react';

import { Input } from '@/shared/ui/Input';

import EyeOff from './assets/eye-off.svg';
import Eye from './assets/eye.svg';
import { StContainer, StIcon } from './styled';
import { TPasswordInput } from './typing';

export const PasswordInput: FC<TPasswordInput> = ({ type, ...props }) => {
  const [inputType, setInputType] = useState(type);

  const toggleType = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  return (
    <StContainer>
      <Input type={inputType} {...props} />
      <StIcon onClick={toggleType}>{inputType === 'password' ? <Eye /> : <EyeOff />}</StIcon>
    </StContainer>
  );
};
