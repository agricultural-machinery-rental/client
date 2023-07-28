'use client';

import { FC } from 'react';
import { StContainerInner, StList, StTitle, ListItem, TChosenProps } from './';

export const ChosenUs: FC<TChosenProps> = ({ data }) => {
  return (
    <section>
      <StContainerInner>
        <StTitle>Нас выбирают более 1000 клиентов по всей России</StTitle>
        <StList>
          {data.map((item, index) => {
            return <ListItem key={`item-${index}`} icon={item.icon} text={item.text} />;
          })}
        </StList>
      </StContainerInner>
    </section>
  );
};
