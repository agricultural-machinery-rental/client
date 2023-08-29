import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { useModalContext } from '@/entities/Modal';

import { PATH } from '@/shared/constants/path';
import { convertUTCDateToRussianDateString } from '@/shared/lib';
import { StFlex, StTextBox } from '@/shared/styles/global';

import { StContainer, StTitle, StWrapper, StSubtitle, StButton, StDateSpan } from './styled';
import type { TBookingSuccess } from './typing';

export const BookingSuccess: FC<TBookingSuccess> = ({ productName, daterange, message }) => {
  const router = useRouter();
  const { closeModal } = useModalContext();

  const handleClick = () => {
    router.push(PATH.MainPage);
    closeModal();
  };

  return (
    <StContainer>
      <StTitle>
        Бронирование <br />
        <StTextBox $fontSize={1} $lineHeight={1.333} $textAlign='center'>
          {productName}
        </StTextBox>
      </StTitle>

      <StWrapper>
        <StSubtitle $fontSize={1} $lineHeight={1.333} $fontWeight={700} $textAlign='center'>
          Заказ оформлен!
        </StSubtitle>
        <StFlex $flexDirection='column' $alignItems='center' $gap={52}>
          <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
            {productName} забронирован с{' '}
            <StDateSpan>{convertUTCDateToRussianDateString(daterange[0])}</StDateSpan> по{' '}
            <StDateSpan>{convertUTCDateToRussianDateString(daterange[1])}</StDateSpan>
          </StTextBox>
          <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
            Ваш комментарий: {message}
          </StTextBox>
          <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
            Наш оператор скоро свяжется с Вами для уточнения деталей
          </StTextBox>
          <StButton
            type='button'
            label='На главную'
            $designType='secondary'
            onClick={handleClick}
          />
        </StFlex>
      </StWrapper>
    </StContainer>
  );
};
