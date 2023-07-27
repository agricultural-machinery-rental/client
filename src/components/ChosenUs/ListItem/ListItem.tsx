'use client';

import { FC } from 'react';
import { StListItem } from '../styled';
import { StListItemText } from './styled';
import type { TListItem } from './typing';

export const ListItem: FC<TListItem> = ({ icon, text }) => {
  return (
    <StListItem>
      {icon}
      <StListItemText>{text}</StListItemText>
    </StListItem>
  );
};
