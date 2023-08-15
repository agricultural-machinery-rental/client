import Image from 'next/image';
import { FC } from 'react';

import {
  StComment,
  StBookingItem,
  StDates,
  StDescriptionBlock,
  StImage,
  StTitle,
  StCategory,
} from './styled';
import { TBookingItem } from './typing';

const BookingItem: FC<TBookingItem> = ({ photo, name, dates, category, comment, children }) => {
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
      </StDescriptionBlock>
      {children}
    </StBookingItem>
  );
};

export { BookingItem };
