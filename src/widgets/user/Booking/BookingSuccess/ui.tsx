import { FC } from 'react';

import { itemData } from '@/shared/catalog';
import { StFlex, StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { StContainer, StTitle, StWrapper, StSubtitle } from './styled';

export const BookingSuccess: FC = () => {
  return (
    <StContainer>
      {/* TODO получать данные itemData.name */}
      <StTitle>
        Бронирование <br />
        <StTextBox $fontSize={1} $lineHeight={1.333} $textAlign='center'>
          {itemData.name}
        </StTextBox>
      </StTitle>

      <StWrapper>
        <StSubtitle $fontSize={1} $lineHeight={1.333} $fontWeight={700} $textAlign='center'>
          Заказ оформлен!
        </StSubtitle>
        <StFlex $flexDirection='column' $alignItems='center' $gap={40}>
          <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
            {/* TODO получать данные itemData.date */}
            {itemData.name} забронирован {/* {itemData.date} */} c 27.07.2023 по 12.08.2023
          </StTextBox>
          <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
            {/* TODO получать данные date-picker */}
            Ваш комментарий: Потребуется навесное оборудование и водитель
          </StTextBox>
          <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
            Наш оператор скоро свяжется с Вами для уточнения деталей
          </StTextBox>
          <Button
            type='button'
            label='На главную'
            $designType='secondary'
            //   TODO заменить функцию в onClick
            onClick={() => console.log('На главную')}
          />
        </StFlex>
      </StWrapper>
    </StContainer>
  );
};
