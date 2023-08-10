import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { StNav, StNavLink } from './styled';
import { type TNav } from './typing';

export const Nav: FC<TNav> = ({ navItems }) => {
  const pathName = usePathname();

  return (
    <StNav $gap={32}>
      {navItems.map((item, index) => (
        <StNavLink
          key={`menu-item-${index}`}
          href={item.link}
          $justifyContent='center'
          className={pathName === item.link ? 'active' : ''}
        >
          {item.title}
        </StNavLink>
      ))}
    </StNav>
  );
};
