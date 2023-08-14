import { FC, useContext } from 'react';

import { ModalContext } from '@/entities/Modal';

import { modalWindows } from '@/shared/modal/modalWindows';
import { StFlex } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { StContainer, StTitle } from './styled';

export const BookingCancel: FC = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <StContainer>
      <StTitle>Вы уверены, что хотите отменить бронирование?</StTitle>
      <StFlex $flexDirection='column' $alignItems='center' $gap={25}>
        <Button
          type='button'
          label='Назад'
          $designType='secondary'
          onClick={() => openModal(modalWindows.bookingEdit)}
        />
        <Button
          type='button'
          label='Отменить заявку'
          $designType='primary'
          onClick={() => openModal(modalWindows.bookingCancelSuccess)}
        />
      </StFlex>
    </StContainer>
  );
};
