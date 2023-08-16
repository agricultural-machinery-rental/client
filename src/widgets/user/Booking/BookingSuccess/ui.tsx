import Link from 'next/link';
import { FC, useContext } from 'react';

import { ModalContext } from '@/entities/Modal';

import { temporatyItemData } from '@/shared/catalog';
import { StFlex, StTextBox } from '@/shared/styles/global';

import { StContainer, StTitle, StWrapper, StSubtitle, StButton } from './styled';

export const BookingSuccess: FC = () => {
  const { closeModal } = useContext(ModalContext);

  const handleClick = () => {
    closeModal();
  };

  return (
    <StContainer>
      {/* TODO получать данные itemData.name */}
      <StTitle>
        Бронирование <br />
        <StTextBox $fontSize={1} $lineHeight={1.333} $textAlign='center'>
          {temporatyItemData[0].name}
        </StTextBox>
      </StTitle>

      <StWrapper>
        <StSubtitle $fontSize={1} $lineHeight={1.333} $fontWeight={700} $textAlign='center'>
          Заказ оформлен!
        </StSubtitle>
        <StFlex $flexDirection='column' $alignItems='center' $gap={52}>
          <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
            {/* TODO получать данные itemData.date */}
            {temporatyItemData[0].name} забронирован {/* {itemData.date} */} 13.08.2023 - 13.08.2023
          </StTextBox>
          <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
            {/* TODO получать данные date-picker */}
            Ваш комментарий: Потребуется навесное оборудование и водитель
          </StTextBox>
          <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
            Наш оператор скоро свяжется с Вами для уточнения деталей
          </StTextBox>
          <Link href='/'>
            <StButton
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
