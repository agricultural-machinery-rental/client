import { FC } from 'react';

import { StNav, StNavLink } from './styled';
import { type TNav } from './typing';

export const Nav: FC<TNav> = ({ navItems, curPathName }) => (
  <StNav $gap={32}>
    {navItems.map((item, index) => (
      <StNavLink
        key={`menu-item-${index}`}
        href={item.link}
        $justifyContent='center'
        className={item.link === curPathName ? 'active' : ''}
      >
        {item.title}
      </StNavLink>
    ))}
  </StNav>
);
