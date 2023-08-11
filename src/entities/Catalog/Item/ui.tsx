import Image from 'next/image';
import { FC } from 'react';

import { catalogItemCharacteristicsUnits, TCatalogItemCharacteristics } from '@/shared/catalog';
import { StFlex } from '@/shared/styles/global';

import { dimensionsUnit, priceUnit } from './constants';
import {
  StButton,
  StCharacteristics,
  StCharacteristicsLine,
  StDescriptionBlock,
  StDescriptionText,
  StItem,
  StPriceLabel,
  StPriceNumber,
  StTitle,
} from './styled';
import { TItem } from './typing';

export const Item: FC<TItem> = ({ itemData }) => {
  return (
    <StItem>
      <div>
        <Image src={itemData.photo} alt={itemData.name} width={216} />
      </div>
      <StDescriptionBlock>
        <StTitle>{itemData.name}</StTitle>
        {/*TODO Здесь будет кнопка для добавления в избранное*/}
        <StDescriptionText>
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
            {/*{Затем выводим габариты}*/}
            {itemData.itemDimensions && (
              <StCharacteristicsLine>
                <span>Габариты</span>
                <span>
                  {itemData.itemDimensions?.join('x')} {dimensionsUnit}
                </span>
              </StCharacteristicsLine>
            )}
          </StCharacteristics>
          <StFlex $flexDirection={'column'} $alignItems={'flex-end'} $gap={10}>
            {itemData.prices.perHour && (
              <>
                <StPriceLabel>Стоимость за 1 ч.</StPriceLabel>
                <StPriceNumber>
                  {itemData.prices.perHour} {priceUnit}
                </StPriceNumber>
              </>
            )}
            {itemData.prices.perShift && (
              <>
                <StPriceLabel>Стоимость за смену 8 ч.</StPriceLabel>
                <StPriceNumber>
                  {itemData.prices.perShift} {priceUnit}
                </StPriceNumber>
              </>
            )}
            <StButton $designType={'primary'} label='Забронировать' type='button' />
          </StFlex>
        </StDescriptionText>
      </StDescriptionBlock>
    </StItem>
  );
};
