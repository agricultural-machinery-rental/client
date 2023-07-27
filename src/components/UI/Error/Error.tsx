import { FC } from 'react';
import { StError, TErrorProps } from './';

export const Error: FC<TErrorProps> = ({ errorMessage }) => {
  return <StError>{errorMessage}</StError>;
};
