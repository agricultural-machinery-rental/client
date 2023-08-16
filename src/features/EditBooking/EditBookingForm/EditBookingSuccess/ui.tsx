import Link from 'next/link';
import { FC } from 'react';

import { StFlex, StTextBox } from '@/shared/styles/global';

import { StContainer, StTitle, StWrapper, StSubtitle, StButton } from './styled';
import type { TBookingSuccess } from './typing';

export const EditBookingSuccess: FC<TBookingSuccess> = ({ productName, daterange, message }) => (
  <StContainer>
    <StTitle>
      Бронирование <br />
      <StTextBox $fontSize={1} $lineHeight={1.333} $textAlign='center'>
        {productName}
      </StTextBox>
    </StTitle>

    <StWrapper>
      <StSubtitle $fontSize={1} $lineHeight={1.333} $fontWeight={700} $textAlign='center'>
        Заказ изменен!
      </StSubtitle>
      <StFlex $flexDirection='column' $alignItems='center' $gap={52}>
        <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
          {productName} забронирован с {daterange[0]} по {daterange[1]}
        </StTextBox>
        <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
          Ваш комментарий: {message}
        </StTextBox>
        <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
          Наш оператор скоро свяжется с Вами для уточнения деталей
        </StTextBox>
        <Link href='/'>
          <StButton type='button' label='На главную' $designType='secondary' />
        </Link>
      </StFlex>
    </StWrapper>
  </StContainer>
);
