import { FC, useContext, useState, useEffect } from 'react';

import { ModalContext } from '@/entities/Modal';

import { PATH } from '@/shared/constants/path';
import { modalWindows } from '@/shared/modal/modalWindows';
import { StContainer, StFlex, StNextLink, StNextSpan } from '@/shared/styles/global';
import { Logo } from '@/shared/ui/Logo';

import { Nav, HeaderNavItems } from './Nav';
import { PhoneButton } from './PhoneButton';
import { StHeader, StMenu } from './styled';

export const Header: FC = () => {
  const { openModal } = useContext(ModalContext);
  // TODO state юзера для теста. Когда будет запрос на бэк, удалить
  const [user, setUser] = useState<Record<string, string> | null>({ name: 'User' });
  useEffect(() => setUser(null), []);

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

            {user ? (
              <StNextLink href={PATH.Profile} $justifyContent='center'>
                {user.name}
              </StNextLink>
            ) : (
              <StNextSpan $justifyContent='center' onClick={() => openModal(modalWindows.signin)}>
                Войти
              </StNextSpan>
            )}
          </StMenu>
        </StFlex>
      </StContainer>
    </StHeader>
  );
};
