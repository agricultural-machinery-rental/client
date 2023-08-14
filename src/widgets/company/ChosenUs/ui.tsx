'use client';

import { FC } from 'react';

import { StHeading3 } from '@/shared/styles/global';

import { ListItem } from './ListItem';
import { StContainerInner, StList, StSection } from './styled';
import { type TChosenProps } from './typing';

export const ChosenUs: FC<TChosenProps> = ({ data }) => {
  return (
    <StSection>
      <StContainerInner>
        <StHeading3>Нас выбирают более 1000 клиентов по всей России</StHeading3>
        <StList>
          {data.map((item, index) => {
            return <ListItem key={`item-${index}`} icon={item.icon} text={item.text} />;
          })}
        </StList>
      </StContainerInner>
    </StSection>
  );
};
