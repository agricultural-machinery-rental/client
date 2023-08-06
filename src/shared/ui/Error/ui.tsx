import { FC } from 'react';

import { StError } from './styled';
import { type TError } from './typing';

export const Error: FC<TError> = ({ errorMessage, className }) => {
  return <StError className={className}>{errorMessage}</StError>;
};
