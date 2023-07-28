'use client';

import {
  StInfoConditions,
  StInfoConditionsWrap,
  StHeadingInfoConditions,
  StSubHeadingInfoConditions,
  StParagraph,
  StConditionsList,
  StListItem,
  StLink,
} from './styled';
import { StFlex } from '@/styles/global';

import InfoConditionsLine1 from '@/assets/icons/infoConditionsLine1.svg';
import InfoConditionsLine2 from '@/assets/icons/infoConditionsLine2.svg';

export const InfoConditions = () => {
  return (
    <StInfoConditions>
      <StInfoConditionsWrap>
        <StHeadingInfoConditions>
          Взять спецтехнику для сельского хозяйства в аренду стало проще:
        </StHeadingInfoConditions>
        <StFlex $alignItems={'center'} $justifyContent='center' $gap={35}>
          <StParagraph>
            Выбирайте технику в <StLink href='#'>каталоге</StLink>, позвоните или{' '}
            <StLink href='#'>оставьте заявку</StLink> на сайте
          </StParagraph>
          <StParagraph>Получите информацию о наличии спецтехники в указанные даты</StParagraph>
          <StParagraph>Оформите доставку спецтехники или заберите самостоятельно</StParagraph>
        </StFlex>

        <StFlex $justifyContent='center'>
          <InfoConditionsLine1 width={399} height={17} />
          <InfoConditionsLine2 width={416} height={17} />
        </StFlex>

        <StSubHeadingInfoConditions>
          Перед бронированием ознакомьтесь с Правилами аренды сельскохозяйственной техники в ОАО
          Агропарк:
        </StSubHeadingInfoConditions>
        <StConditionsList>
          <StListItem>водительские права категории А или С</StListItem>
          <StListItem>стаж вождения не менее 2 лет</StListItem>
          <StListItem>паспорт</StListItem>
        </StConditionsList>
      </StInfoConditionsWrap>
    </StInfoConditions>
  );
};
