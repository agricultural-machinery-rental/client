import Link from 'next/link';
import { FC } from 'react';

import { useModalContext } from '@/entities/Modal';

import { StFlex, StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { StContainer, StTitle, StWrapper } from './styled';

export const CancelBookingSuccess: FC = () => {
  const { closeModal } = useModalContext();

  const handleClick = () => {
    closeModal();
  };

  return (
    <StContainer>
      <StTitle>Бронирование отменено</StTitle>
      <StWrapper>
        <StFlex $flexDirection='column' $alignItems='center' $gap={73}>
          <StTextBox $fontSize={0.75} $lineHeight={1.2} $textAlign='center'>
            Будем рады снова видеть Вас в числе наших клиентов!
          </StTextBox>
          <Link href='/'>
            <Button
              type='button'
              label='На главную'
              $designType='secondary'
              onClick={handleClick}
            />
          </Link>
        </StFlex>
      </StWrapper>
    </StContainer>
  );
};
