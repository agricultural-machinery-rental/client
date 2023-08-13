import Image from 'next/image';
import { FC } from 'react';

import {
  StComment,
  StBookingItem,
  StDates,
  StDescriptionBlock,
  StImage,
  StTitle,
  StEditButton,
  StCategory,
} from './styled';
import { TBookingItem } from './typing';

const BookingItem: FC<TBookingItem> = ({ photo, name, button, dates, category, comment }) => {
  return (
    <StBookingItem>
      <StImage>
        <Image src={photo} layout='fill' alt={name} />
      </StImage>
      <StDescriptionBlock>
        <StTitle>{name}</StTitle>
        {dates && <StDates>{dates}</StDates>}
        {category && <StCategory>{category}</StCategory>}
        {comment && <StComment>{comment}</StComment>}
        <StEditButton>{button}</StEditButton>
      </StDescriptionBlock>
    </StBookingItem>
  );
};

export { BookingItem };
