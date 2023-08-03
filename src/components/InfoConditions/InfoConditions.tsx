import {
  StInfoConditions,
  StInfoConditionsWrap,
  StHeadingInfoConditions,
  StText,
  StParagraph,
  StLink,
  StFlex,
  StInfoBlockFlex,
} from './';

import InfoConditionsLine1 from '@/assets/icons/infoConditionsLine1.svg';
import InfoConditionsLine2 from '@/assets/icons/infoConditionsLine2.svg';

export const InfoConditions = () => {
  return (
    <StInfoConditions>
      <StInfoConditionsWrap>
        <StHeadingInfoConditions>
          Взять спецтехнику для сельского хозяйства в аренду стало проще
        </StHeadingInfoConditions>
        <StInfoBlockFlex>
          <StParagraph>
            Выбирайте технику в <StLink href='#'>каталоге</StLink>, позвоните нам или{' '}
            <StLink href='#'>оставьте заявку</StLink> на звонок
          </StParagraph>
          <StParagraph>Получите информацию о наличии спецтехники в указанные даты</StParagraph>
          <StParagraph>Оформите доставку спецтехники или заберите самостоятельно</StParagraph>
        </StInfoBlockFlex>

        <StFlex $justifyContent='center'>
          <InfoConditionsLine1 width={399} height={17} />
          <InfoConditionsLine2 width={416} height={17} />
        </StFlex>

        <StText>
          Перед бронированием, пожалуйста, ознакомьтесь с <StLink href='#'>Правилами аренды</StLink>{' '}
          сельхозтехники ОАО “Агропарк”
        </StText>
      </StInfoConditionsWrap>
    </StInfoConditions>
  );
};
