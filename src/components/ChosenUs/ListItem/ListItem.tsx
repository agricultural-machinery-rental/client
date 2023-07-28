'use client';

import { FC } from 'react';
import { StListItem, StListItemText, TListItem } from './';

export const ListItem: FC<TListItem> = ({ icon, text }) => {
  return (
    <StListItem>
      {icon}
      <StListItemText>{text}</StListItemText>
    </StListItem>
  );
};
