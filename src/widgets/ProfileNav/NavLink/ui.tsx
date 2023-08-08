import { FC } from 'react';

import { StNavLink } from './styled';
import type { TNavLink } from './typing';

export const NavLink: FC<TNavLink> = ({ text, link }) => <StNavLink href={link}>{text}</StNavLink>;
