import { FC } from 'react';

import { StNav, StNavLink, type TNavProps } from './';

export const Nav: FC<TNavProps> = ({ navItems }) => (
  <StNav $gap={52}>
    {navItems.map((item, index) => (
      <StNavLink key={`menu-item-${index}`} href={item.link} $justifyContent='center'>
        {item.title}
      </StNavLink>
    ))}
  </StNav>
);
