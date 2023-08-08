import React, { FC } from 'react';

import { StButtonIcon } from './styled';
import { TButtonIcon } from './typing';

export const ButtonIcon: FC<TButtonIcon> = ({ icon, ...props }) => {
  return <StButtonIcon {...props}>{icon}</StButtonIcon>;
};
