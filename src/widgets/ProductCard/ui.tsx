import { FC } from 'react';

import { AddToFavorite } from '@/features/AddToFavorite';
import { MakeOrder } from '@/features/MakeOrder';
import { Swiper } from '@/features/Swiper';

import { TItem, priceUnit } from '@/entities/Catalog/Item';
import { useModalContext } from '@/entities/Modal';

import { catalogItemCharacteristicsUnits, TCatalogItemCharacteristics } from '@/shared/catalog';
import { StFlex } from '@/shared/styles/global';

import { dataTractors } from './constants';
import {
  StProductHeader,
  StProductMain,
  StProductText,
  StProductTitle,
  StSection,
  StProductFooter,
  StProductFooterInfo,
  StProductPrice,
  StButton,
  StCharacteristics,
  StCharacteristicsLine,
  StHeaderLine,
} from './styled';

export const ProductCard: FC<TItem> = ({ itemData }) => {
  const { openModal } = useModalContext();

  // TODO Все данные подтягивать из объекта, полученного с бэка
  return (
    <StSection>
      <article>
        <StHeaderLine>
          <StProductHeader>
            <StProductTitle>
              {itemData.brand} {itemData.name}
            </StProductTitle>
          </StProductHeader>
          <AddToFavorite />
        </StHeaderLine>
        <StProductMain>
          <div>
            <StProductText>{itemData.description}</StProductText>
            <ul>
              <StCharacteristics>
                {/*{Сначала выводим характеристики}*/}
                {Object.entries(itemData.characteristics).map(([key, value]) => {
                  const units =
                    catalogItemCharacteristicsUnits[key as keyof TCatalogItemCharacteristics];
                  return (
                    <StCharacteristicsLine key={key}>
                      <span>{units?.label}</span>
                      <span>
                        {value} {units?.unit}
                      </span>
                    </StCharacteristicsLine>
                  );
                })}
                {Object.entries(itemData.additionalCharacteristics).map(([key, value]) => {
                  const units =
                    catalogItemCharacteristicsUnits[key as keyof TCatalogItemCharacteristics];
                  const displayValue =
                    key === 'attachmentsAvailable' ? (value ? 'Да' : 'Нет') : value;
                  return (
                    <StCharacteristicsLine key={key}>
                      <span>{units?.label}</span>
                      <span>
                        {displayValue} {units?.unit}
                      </span>
                    </StCharacteristicsLine>
                  );
                })}
              </StCharacteristics>
            </ul>
          </div>
          <Swiper dataArray={dataTractors} />
        </StProductMain>
        <StProductFooter>
          <StProductFooterInfo>
            <StFlex $alignItems={'flex-end'} $gap={60}>
              {itemData.prices.perHour && (
                <StFlex $flexDirection={'column'} $alignItems={'flex-end'} $gap={10}>
                  <span>Стоимость за 1 ч.</span>
                  <StProductPrice>
                    {itemData.prices.perHour} {priceUnit}
                  </StProductPrice>
                </StFlex>
              )}
              {itemData.prices.perShift && (
                <StFlex $flexDirection={'column'} $alignItems={'flex-end'} $gap={10}>
                  <span>Стоимость за смену 8 ч.</span>
                  <StProductPrice>
                    {itemData.prices.perShift} {priceUnit}
                  </StProductPrice>
                </StFlex>
              )}
            </StFlex>
          </StProductFooterInfo>
          <StButton
            $designType={'primary'}
            label='Забронировать'
            type='button'
            onClick={() =>
              openModal(<MakeOrder productId={itemData.id} productName={itemData.name} />)
            }
          />
        </StProductFooter>
      </article>
    </StSection>
  );
};
