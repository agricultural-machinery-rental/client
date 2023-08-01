'use client';

import { FC } from 'react';
import { StContainerInner, StList, ListItem, TChosenProps } from './';
import { StHeading3 } from '@/styles/global';

export const ChosenUs: FC<TChosenProps> = ({ data }) => {
  return (
    <section>
      <StContainerInner>
        <StHeading3>Нас выбирают более 1000 клиентов по всей России</StHeading3>
        <StList>
          {data.map((item, index) => {
            return <ListItem key={`item-${index}`} icon={item.icon} text={item.text} />;
          })}
        </StList>
      </StContainerInner>
    </section>
  );
};
