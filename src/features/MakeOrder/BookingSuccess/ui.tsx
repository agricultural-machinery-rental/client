import Link from 'next/link';
<<<<<<< HEAD:src/features/MakeOrder/BookingSuccess/ui.tsx
import { useRouter } from 'next/navigation';
import { FC } from 'react';
=======
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';
>>>>>>> d8a296b (fix Link on Button):src/widgets/user/Booking/BookingSuccess/ui.tsx

import { useModalContext } from '@/entities/Modal';

import { PATH } from '@/shared/constants/path';
import { StFlex, StTextBox } from '@/shared/styles/global';

import { StContainer, StTitle, StWrapper, StSubtitle, StButton } from './styled';
import type { TBookingSuccess } from './typing';

<<<<<<< HEAD:src/features/MakeOrder/BookingSuccess/ui.tsx
export const BookingSuccess: FC<TBookingSuccess> = ({ productName, daterange, message }) => {
  const router = useRouter();
  const { closeModal } = useModalContext();

  const handleClick = () => {
    router.push(PATH.MainPage);
=======
export const BookingSuccess: FC = () => {
  const router = useRouter();
  const { closeModal } = useContext(ModalContext);

  const handleClick = () => {
    router.push('/');
>>>>>>> d8a296b (fix Link on Button):src/widgets/user/Booking/BookingSuccess/ui.tsx
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
            {productName} забронирован с {daterange[0]} по {daterange[1]}
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
