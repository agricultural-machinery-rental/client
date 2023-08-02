import { dataTractors } from '../const/dataTractors';
import { Swiper } from '@/features/Swiper';
import { StarSVG } from './StarSVG/StarSVG';
import {
  StBookingButton,
  StProductHeader,
  StProductList,
  StProductMain,
  StProductPrice,
  StProductText,
  StProductTitle,
  StSection,
  StStarButton,
} from './styled';

export const ProductCard = () => {
  return (
    <StSection>
      <article>
        <StProductHeader>
          <StProductTitle>Трактор Название TRY-45</StProductTitle>
          <StStarButton>
            <StarSVG />
          </StStarButton>
        </StProductHeader>
        <StProductMain>
          <div>
            <StProductText>
              Описание, Характеристики и остальное, типа такая то модель, производство Беларусь 2018
              года выпуска, используется для таких то целей, расход топлива и бла бла
            </StProductText>
            <StProductList>
              <li>требуемая категория прав - Д</li>
              <li>Возможность почасовой оплаты</li>
              <li>Подходит для ...</li>
            </StProductList>
            <StProductPrice>13500 ₽/смена 8 часов</StProductPrice>
          </div>
          <Swiper dataArray={dataTractors} />
        </StProductMain>
        {/* TODO Кнопка добавлена на время, будет заменена на общую кнопку из entities */}
        <StBookingButton>Забронировать</StBookingButton>
      </article>
    </StSection>
  );
};
