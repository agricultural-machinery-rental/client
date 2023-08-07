import { FC } from 'react';

import { StNav, StNavLink } from './styled';
import { type TNav } from './typing';

export const Nav: FC<TNav> = ({ navItems }) => (
  <StNav $gap={52}>
    {navItems.map((item, index) => (
      <StNavLink key={`menu-item-${index}`} href={item.link} $justifyContent='center'>
        {item.title}
      </StNavLink>
    ))}
  </StNav>
);
