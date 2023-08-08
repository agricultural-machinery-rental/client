import { FC, useContext } from 'react';

import { ModalContext } from '@/entities/Modal';

import { modalWindows } from '@/shared/modal/modalWindows';
import { StContainer, StFlex, StNextLink, StNextSpan } from '@/shared/styles/global';
import { Logo } from '@/shared/ui/Logo';

import { Nav, HeaderNavItems } from './Nav';
import { PhoneButton } from './PhoneButton';
import { StHeader, StMenu } from './styled';

export const Header: FC = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <StHeader>
      <StContainer>
        <StFlex $alignItems={'center'}>
          <Logo />
          <StMenu $justifyContent='end' $gap={50}>
            <Nav navItems={HeaderNavItems} />
            {/* TODO Заменить номер телефона в тексте и в href */}

            <StFlex $gap={14} $justifyContent='center'>
              <StNextLink href='tel:+74954954949' $justifyContent='center'>
                +7 (495) XXX XX XX
              </StNextLink>
              <PhoneButton />
            </StFlex>

            <StNextSpan $justifyContent='center' onClick={() => openModal(modalWindows.example)}>
              Войти
            </StNextSpan>
          </StMenu>
        </StFlex>
      </StContainer>
    </StHeader>
  );
};
