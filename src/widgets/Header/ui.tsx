import { usePathname } from 'next/navigation';
import { FC, useContext, useState } from 'react';

import { ModalContext } from '@/entities/Modal';

import { PATH } from '@/shared/constants/path';
import { modalWindows } from '@/shared/modal/modalWindows';
import { StContainer, StFlex } from '@/shared/styles/global';
import { Logo } from '@/shared/ui/Logo';

import { Nav, HeaderNavItems } from './Nav';
import { PhoneButton } from './PhoneButton';
import { StHeader, StMenu, StNextLinkStyled, StSpan } from './styled';

export const Header: FC = () => {
  const pathName = usePathname();

  const { openModal } = useContext(ModalContext);
  // TODO state юзера для теста. Когда будет запрос на бэк, удалить
  const [user] = useState<Record<string, string> | null>({ name: 'User' });

  return (
    <StHeader>
      <StContainer>
        <StFlex $alignItems={'center'}>
          <Logo />
          <StMenu $justifyContent='end' $gap={40}>
            <Nav navItems={HeaderNavItems} curPathName={pathName} />

            {/* TODO Заменить номер телефона в тексте и в href */}
            <StFlex $gap={8} $justifyContent='center'>
              <StNextLinkStyled href='tel:+74954954949' $justifyContent='center'>
                +7 (495) XXX XX XX
              </StNextLinkStyled>
              <PhoneButton />
            </StFlex>

            {user ? (
              <StNextLinkStyled
                href={PATH.Profile}
                $justifyContent='center'
                className={pathName.includes(PATH.Profile) ? 'active' : ''}
              >
                {user.name}
              </StNextLinkStyled>
            ) : (
              <StSpan $justifyContent='center' onClick={() => openModal(modalWindows.signin)}>
                Войти
              </StSpan>
            )}
          </StMenu>
        </StFlex>
      </StContainer>
    </StHeader>
  );
};
