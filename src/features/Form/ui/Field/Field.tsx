import { FC } from 'react';

import { Error } from '@/components/UI/Error';

import { StFieldWrapper, StRelativeBox, StAsterick } from './styled';
import type { TFieldProps } from '../../typing';
import { switchFieldComponent } from '../../lib';

export const Field: FC<TFieldProps> = ({
  kindOfField,
  errorMessage,
  required,
  asterisk,
  ...props
}) => {
  const Component = switchFieldComponent(kindOfField);

  return (
    <StFieldWrapper>
      <StRelativeBox>
        {asterisk && <StAsterick visibility={required ? 'visible' : 'hidden'}>*</StAsterick>}
        <Component {...props}></Component>
      </StRelativeBox>
      {errorMessage && <Error errorMessage={errorMessage} />}
    </StFieldWrapper>
  );
};
