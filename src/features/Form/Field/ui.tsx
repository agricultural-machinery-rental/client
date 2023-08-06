import { FC } from 'react';

import { switchFieldComponent } from '@/features/Form/lib';

import { Error } from '@/shared/ui/Error';

import { StFieldWrapper, StRelativeBox, StAsterick } from './styled';
import { type TField } from './typing';

export const Field: FC<TField> = ({ kindOfField, errorMessage, required, asterisk, ...props }) => {
  const Component = switchFieldComponent(kindOfField);

  return (
    <StFieldWrapper>
      <StRelativeBox>
        {asterisk && <StAsterick visibility={required ? 'visible' : 'hidden'}>*</StAsterick>}
        <Component {...props}></Component>
      </StRelativeBox>
      <Error errorMessage={errorMessage} />
    </StFieldWrapper>
  );
};
