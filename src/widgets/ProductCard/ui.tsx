import { AddToFavorite } from '@/features/AddToFavorite';
import { MakeOrder } from '@/features/MakeOrder';
import { Swiper } from '@/features/Swiper';

import { useModalContext } from '@/entities/Modal';

import { dataTractors } from './constants';
import {
  StProductHeader,
  StProductList,
  StProductMain,
  StProductItemInfo,
  StProductText,
  StProductTitle,
  StSection,
  StStarButton,
  StProductFooter,
  StProductFooterInfo,
  StProductPrice,
  StButton,
} from './styled';

export const ProductCard = () => {
  const { openModal } = useModalContext();

  // TODO Все данные подтягивать из объекта, полученного с бэка
  const productName = 'Трактор Название TRY-45';

  return (
    <StSection>
      <article>
        <StProductHeader>
          <StProductTitle>{productName}</StProductTitle>
        </StProductHeader>
        <StProductMain>
          <div>
            <StProductText>
              Описание, Характеристики и остальное, типа такая то модель, производство Беларусь 2018
              года выпуска, используется для таких то целей, расход топлива и бла бла
            </StProductText>
            <StProductList>
              <li>требуемая категория прав - C</li>
              <li>Возможность почасовой оплаты</li>
              <li>Подходит для ...</li>
            </StProductList>
            <ul>
              <StProductItemInfo>
                <span>Общая масса</span>
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
          <StStarButton>
            <AddToFavorite />
          </StStarButton>
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
          <StButton
            $designType={'primary'}
            label='Забронировать'
            type='button'
            onClick={() =>
              openModal(<MakeOrder productId={productName} productName={productName} />)
            }
          />
        </StProductFooter>
      </article>
    </StSection>
  );
};
