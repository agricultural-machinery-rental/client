import Image from 'next/image';
import { FC } from 'react';

import { catalogItemCharacteristicsUnits } from '@/shared/catalog';
import { PATH } from '@/shared/constants/path';
import { useCategoryByUrl } from '@/shared/hooks';
import defaultImage from '@/shared/photos/no_image.png';
import { StFlex } from '@/shared/styles/global';

import { priceUnit } from './constants';
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

export const Item: FC<TItem> = ({ itemData, buttonClick }) => {
  const characteristics: Record<keyof typeof catalogItemCharacteristicsUnits, string | number> = {
    year_of_manufacture: itemData.year_of_manufacture,
    mileage: itemData.mileage,
    powerHp: itemData.machinery.power_hp,
    payloadCapacity: itemData.machinery.payload_capacity_kg,
    location: itemData.location.title,
  };

  const category = useCategoryByUrl();

  return (
    <StItem>
      <div>
        <Image
          src={itemData.images.length ? itemData.images[0].image : defaultImage}
          alt={itemData.machinery.name}
          width={216}
          height={272}
        />
      </div>
      <StDescriptionBlock>
        <StTitle href={`${PATH.Catalog}/${category}/${itemData.id}`}>
          <h3>
            {itemData.machinery.mark.brand} {itemData.machinery.name}
          </h3>
        </StTitle>
        {/*TODO Здесь будет кнопка для добавления в избранное*/}
        <StDescriptionText>
          <StCharacteristics>
            {Object.entries(characteristics).map(([key, value]) => {
              if (!value) return null;
              const { label = null, unit = null } = catalogItemCharacteristicsUnits[key] ?? {};
              return (
                <StCharacteristicsLine key={key}>
                  <span>{label}</span>
                  <span>
                    {value} {unit}
                  </span>
                </StCharacteristicsLine>
              );
            })}
          </StCharacteristics>
          <StFlex $flexDirection={'column'} $alignItems={'flex-end'} $gap={10}>
            {itemData.price_per_hour ? (
              <>
                <StPriceLabel>Стоимость за 1 ч.</StPriceLabel>
                <StPriceNumber>
                  {Number(itemData.price_per_hour)} {priceUnit}
                </StPriceNumber>
              </>
            ) : null}
            {itemData.price_per_shift ? (
              <>
                <StPriceLabel>Стоимость за смену 8 ч.</StPriceLabel>
                <StPriceNumber>
                  {Number(itemData.price_per_shift)} {priceUnit}
                </StPriceNumber>
              </>
            ) : null}
            <StButton
              $designType={'primary'}
              label='Забронировать'
              type='button'
              onClick={buttonClick}
            />
          </StFlex>
        </StDescriptionText>
      </StDescriptionBlock>
    </StItem>
  );
};
