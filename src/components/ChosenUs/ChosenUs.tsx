'use client';

import { FC } from 'react';
import { StContainerInner, StList, StTitle } from './styled';
import { ListItem } from './ListItem/ListItem';
import { TChosenProps } from './typing';

export const ChosenUs: FC<TChosenProps> = ({ data }) => {
  return (
    <section>
      <StContainerInner>
        <StTitle>Нас выбирают более 1000 клиентов по всей России</StTitle>
        <StList>
          {data.map(item => {
            return <ListItem key={item.id} icon={item.icon} text={item.text} />;
          })}
        </StList>
      </StContainerInner>
    </section>
  );
};
