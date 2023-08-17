import { FC } from 'react';

import { StWrapFiltersFieldReset, StResetButton } from './styled';
import { TResetField } from './types';

export const ResetField: FC<TResetField> = ({ callback }) => {
  return (
    <StWrapFiltersFieldReset>
      <StResetButton onClick={callback}>Сбросить фильтр</StResetButton>
    </StWrapFiltersFieldReset>
  );
};
