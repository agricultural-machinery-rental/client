import { FC } from 'react';
import { StError, TErrorProps } from './';

export const Error: FC<TErrorProps> = ({ errorMessage, className }) => {
  return <StError className={className}>{errorMessage}</StError>;
};
