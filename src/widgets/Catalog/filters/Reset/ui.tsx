import { FC } from 'react';

import { StWrapFiltersField } from '../Field/styled';

import { ResetButton } from './styled';
import { TResetField } from './types';

export const ResetField: FC<TResetField> = ({ callback }) => {
  return (
    <StWrapFiltersField>
      <ResetButton onClick={callback}>Сбросить фильтр</ResetButton>
    </StWrapFiltersField>
  );
};
