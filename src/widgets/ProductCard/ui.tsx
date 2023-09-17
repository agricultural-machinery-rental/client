import { FC } from 'react';

import { AddToFavorite } from '@/features/AddToFavorite';
import { MakeOrder } from '@/features/MakeOrder';
import { Swiper } from '@/features/Swiper';

import { TItem, priceUnit } from '@/entities/Catalog/Item';
import { useModalContext } from '@/entities/Modal';

import { catalogItemCharacteristicsUnits } from '@/shared/catalog';
import { StFlex } from '@/shared/styles/global';

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

  const characteristics: Record<keyof typeof catalogItemCharacteristicsUnits, string | number> = {
    year_of_manufacture: itemData.year_of_manufacture,
    mileage: itemData.mileage,
    powerHp: itemData.machinery.power_hp,
    payloadCapacity: itemData.machinery.payload_capacity_kg,
    location: itemData.location.title,
    countryOfOrigin: itemData.machinery.mark.country_of_origin,
    deliveryDistance: itemData.delivery_distance_km,
    attachmentsAvailable: itemData.machinery.attachments_available ? 'Да' : 'Нет',
    workType: itemData.machinery.work_type.join(', '),
  };

  return (
    <StSection>
      <article>
        <StHeaderLine>
          <StProductHeader>
            <StProductTitle>
              {itemData.machinery.mark.brand} {itemData.machinery.name}
            </StProductTitle>
          </StProductHeader>
          <AddToFavorite />
        </StHeaderLine>
        <StProductMain>
          <div>
            <StProductText>{itemData.machinery.description}</StProductText>
            <ul>
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
            </ul>
          </div>
          <Swiper dataArray={itemData.images} />
        </StProductMain>
        <StProductFooter>
          <StProductFooterInfo>
            <StFlex $alignItems={'flex-end'} $gap={60}>
              {itemData.price_per_hour ? (
                <StFlex $flexDirection={'column'} $alignItems={'flex-end'} $gap={10}>
                  <span>Стоимость за 1 ч.</span>
                  <StProductPrice>
                    {itemData.price_per_hour} {priceUnit}
                  </StProductPrice>
                </StFlex>
              ) : null}
              {itemData.price_per_shift ? (
                <StFlex $flexDirection={'column'} $alignItems={'flex-end'} $gap={10}>
                  <span>Стоимость за смену 8 ч.</span>
                  <StProductPrice>
                    {itemData.price_per_shift} {priceUnit}
                  </StProductPrice>
                </StFlex>
              ) : null}
            </StFlex>
          </StProductFooterInfo>
          <StButton
            $designType={'primary'}
            label='Забронировать'
            type='button'
            onClick={() =>
              openModal(
                <MakeOrder
                  productId={itemData.id}
                  productName={`${itemData.machinery.mark.brand} ${itemData.machinery.name}`}
                />,
              )
            }
          />
        </StProductFooter>
      </article>
    </StSection>
  );
};
