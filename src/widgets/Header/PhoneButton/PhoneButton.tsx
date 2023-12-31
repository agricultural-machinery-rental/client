import { FC } from 'react';

import { ButtonIcon } from '@/shared/ui/ButtonIcon';

import PhoneIcon from './assets/phoneIcon.svg';
import type { TPhoneButton } from './typing';

export const PhoneButton: FC<TPhoneButton> = ({ onClick }) => {
  return <ButtonIcon icon={<PhoneIcon width={40} height={40} />} onClick={onClick} />;
};
