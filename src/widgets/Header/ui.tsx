import { FC, useContext } from 'react';

import { ModalContext } from '@/entities/Modal';

import { modalWindows } from '@/shared/modal/modalWindows';
import { StContainer, StFlex, StNextLink, StNextSpan } from '@/shared/styles/global';
import { Logo } from '@/shared/ui/Logo';

import NavigationSVG from './assets/navigation.svg';
import UserSVG from './assets/user.svg';
import { Nav, HeaderNavItems } from './Nav';
import { StHeader, StMenu, StLocationLink } from './styled';
import type { THeader } from './typing';

export const Header: FC<THeader> = ({ location }) => {
  const { openModal } = useContext(ModalContext);

  return (
    <StHeader>
      <StContainer>
        <StFlex $alignItems={'center'}>
          <Logo width={195} height={104} />
          <StMenu $justifyContent='end' $gap={50}>
            <Nav navItems={HeaderNavItems} />
            <StLocationLink $justifyContent='center' $alignItems='center' $gap={8}>
              <NavigationSVG width={24} height={24} />
              {location}
            </StLocationLink>
            {/* TODO Заменить номер телефона в тексте и в href */}
            <StNextLink href='tel:+74954954949' $justifyContent='center'>
              +7 (495) XXX XX XX
            </StNextLink>
            <StNextSpan $justifyContent='center' onClick={() => openModal(modalWindows.signin)}>
              <UserSVG width={24} height={24} />
            </StNextSpan>
          </StMenu>
        </StFlex>
      </StContainer>
    </StHeader>
  );
};
