'use client';
import { ModalContext, modalWindows } from '@/providers/modalContext';
import { StContainer, StFlex, StNextLink, StNextSpan } from '@/styles/global';
import { FC, useContext } from 'react';
import { headerNavItems } from '@/components/Nav/constants';
import { StHeader, StLocationLink, StMenu } from './styled';
import type { THeaderProps } from './typing';
import NavigationSVG from '@/assets/icons/navigation.svg';
import UserSVG from '@/assets/icons/user.svg';
import { Logo } from '@/components/Logo/Logo';
import { Nav } from '@/components/Nav/Nav';

export const Header: FC<THeaderProps> = ({ location }) => {
  const { openModal } = useContext(ModalContext);

  return (
    <StHeader>
      <StContainer>
        <StFlex $alignItems={'center'}>
          <Logo width={195} height={104} />
          <StMenu $justifyContent='end' $gap={50}>
            <Nav navItems={headerNavItems} />
            <StLocationLink $justifyContent='center' $alignItems='center' $gap={8}>
              <NavigationSVG width={24} height={24} />
              {location}
            </StLocationLink>
            {/* TODO Заменить номер телефона в тексте и в href */}
            <StNextLink href='tel:+74954954949' $justifyContent='center'>
              +7 (495) XXX XX XX
            </StNextLink>
            <StNextSpan $justifyContent='center' onClick={() => openModal(modalWindows.example)}>
              <UserSVG width={24} height={24} />
            </StNextSpan>
          </StMenu>
        </StFlex>
      </StContainer>
    </StHeader>
  );
};
