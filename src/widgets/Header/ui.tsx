import { FC, useContext } from 'react';

import { ModalContext } from '@/entities/Modal';

import { modalWindows } from '@/shared/modal/modalWindows';
import { StContainer, StFlex } from '@/shared/styles/global';
import { Logo } from '@/shared/ui/Logo';

import { Nav, HeaderNavItems } from './Nav';
import { PhoneButton } from './PhoneButton';
import { StHeader, StMenu, StPhoneLink, StSpan } from './styled';

export const Header: FC = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <StHeader>
      <StContainer>
        <StFlex $alignItems={'center'}>
          <Logo />
          <StMenu $justifyContent='end' $gap={40}>
            <Nav navItems={HeaderNavItems} />

            {/* TODO Заменить номер телефона в тексте и в href */}
            <StFlex $gap={8} $justifyContent='center'>
              <StPhoneLink href='tel:+74954954949' $justifyContent='center'>
                +7 (495) XXX XX XX
              </StPhoneLink>
              <PhoneButton />
            </StFlex>

            <StSpan $justifyContent='center' onClick={() => openModal(modalWindows.signin)}>
              Войти
            </StSpan>
          </StMenu>
        </StFlex>
      </StContainer>
    </StHeader>
  );
};
