import { FC } from 'react';

import { Error } from '@/shared/ui/Error';

import { switchFieldComponent } from './lib';
import { StFieldWrapper, StRelativeBox, StAsterick } from './styled';
import { type TField } from './typing';

export const Field: FC<TField> = ({ kindOfField, errorMessage, required, asterisk, ...props }) => {
  const Component = switchFieldComponent(kindOfField);
  const hasError = !!errorMessage;

  return (
    <StFieldWrapper>
      <StRelativeBox>
        {asterisk && <StAsterick visibility={required ? 'visible' : 'hidden'}>*</StAsterick>}
        <Component {...props} className={hasError ? 'error' : ''} />
      </StRelativeBox>
      {errorMessage && <Error errorMessage={errorMessage} />}
    </StFieldWrapper>
  );
};
