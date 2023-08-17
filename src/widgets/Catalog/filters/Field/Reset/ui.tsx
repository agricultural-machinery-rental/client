import { FC } from 'react';

import { StWrapFiltersFieldReset, ResetButton } from './styled';
import { TResetField } from './types';

export const ResetField: FC<TResetField> = ({ callback }) => {
  return (
    <StWrapFiltersFieldReset>
      <ResetButton onClick={callback}>Сбросить фильтр</ResetButton>
    </StWrapFiltersFieldReset>
  );
};
