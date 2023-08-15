import { FC } from 'react';
import { WrapFiltersField } from '../field/styles';
import { ResetButton } from './styles';
import { TResetField } from './types';

export const ResetField: FC<TResetField> = ({ callback }) => {
  return (
    <WrapFiltersField>
      <ResetButton onClick={callback}>Сбросить фильтр</ResetButton>
    </WrapFiltersField>
  );
};
