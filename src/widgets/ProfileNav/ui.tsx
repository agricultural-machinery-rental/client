import { FC } from 'react';

import { NavLink } from './NavLink';
import { StProfileNav } from './styled';
import { TProfileNav } from './typing';

export const ProfileNav: FC<TProfileNav> = ({ links }) => (
  <StProfileNav>
    {links.map((link, key) => (
      <NavLink key={key} text={link.text} link={link.href} />
    ))}
  </StProfileNav>
);
