import { dataTractors } from '../const/dataTractors';
import { Swiper } from '@/features/Swiper';
import {
  StProductHeader,
  StProductItemInfo,
  StProductList,
  StProductMain,
  StProductPrice,
  StProductText,
  StProductTitle,
  StSection,
  StStarButton,
  StProductFooter,
  StProductFooterInfo,
} from './styled';
import Star from '@/widgets/ProductCard/assets/icons/star.svg';
import { Button } from '@/shared/Button';

export const ProductCard = () => {
  return (
    <StSection>
      <article>
        <StProductHeader>
          <StProductTitle>Трактор Название TRY-45</StProductTitle>
          <StStarButton>
            <Star />
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
            <ul className='product-list-info'>
              <StProductItemInfo>
                <span>Общая масса </span>
                <span>7800 кг</span>
              </StProductItemInfo>
              <StProductItemInfo>
                <span>Объём ковша</span>
                <span>0,3 м³</span>
              </StProductItemInfo>
              <StProductItemInfo>
                <span>Глубина копания</span>
                <span>4150 мм</span>
              </StProductItemInfo>
              <StProductItemInfo>
                <span>Ширина гусеницы</span>
                <span>450 мм</span>
              </StProductItemInfo>
              <StProductItemInfo>
                <span>Габариты</span>
                <span>6080×2260×2640 мм</span>
              </StProductItemInfo>
            </ul>
          </div>
          <Swiper dataArray={dataTractors} />
        </StProductMain>
        <StProductFooter>
          <StProductFooterInfo>
            <span>Стоимость за 1 ч.</span>
            <StProductPrice>1600 ₽</StProductPrice>
          </StProductFooterInfo>
          <StProductFooterInfo>
            <span>Стоимость за смену 8 ч.</span>
            <StProductPrice>12800 ₽</StProductPrice>
          </StProductFooterInfo>
          <Button label='Забронировать' />
        </StProductFooter>
      </article>
    </StSection>
  );
};
