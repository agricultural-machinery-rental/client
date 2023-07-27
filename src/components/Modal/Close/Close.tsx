import { TClose } from '@/components/Modal/Close/typing';
import { StClose } from './styled';
import CloseSVG from '@/assets/icons/close.svg';

export const Close: TClose = props => {
  return (
    <StClose {...props}>
      <CloseSVG />
    </StClose>
  );
};
