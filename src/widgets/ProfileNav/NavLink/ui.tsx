import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { StNavLink } from './styled';
import type { TNavLink } from './typing';

export const NavLink: FC<TNavLink> = ({ text, link, className }) => {
  const pathname = usePathname();

  return (
    <StNavLink href={link} $active={pathname === link} className={className}>
      {text}
    </StNavLink>
  );
};
