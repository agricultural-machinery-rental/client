import { FC } from 'react';

import CloseSVG from './assets/close.svg';
import { StClose } from './styled';
import { TClose } from './typing';

export const Close: FC<TClose> = props => {
  return (
    <StClose {...props}>
      <CloseSVG />
    </StClose>
  );
};
