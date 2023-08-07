import Link from 'next/link';

import { StFlex } from '@/shared/styles/global';

import TelegramSVG from './assets/telegram.svg';
import WhatsAppSVG from './assets/whatsapp.svg';
import { footerColumns } from './constants';
import { FooterBlock } from './FooterBlock';
import { StFooter, StFooterContainer, StFooterNetworksWrapper } from './styled';

export const Footer = () => {
  return (
    <StFooter>
      <StFooterContainer>
        <StFlex>
          {footerColumns.map((col, index) => (
            <FooterBlock col={col} key={`footer-col-${index}`} />
          ))}
        </StFlex>
        <StFooterNetworksWrapper $justifyContent='flex-end' $gap={32}>
          {/* TODO прописать ссылки, на которые ведут иконки соц.сетей */}
          <Link href='src/widgets/Footer'>
            <TelegramSVG width={40} height={40} />
          </Link>
          <Link href='src/widgets/Footer'>
            <WhatsAppSVG width={40} height={40} />
          </Link>
        </StFooterNetworksWrapper>
        <div>&copy;2023 ООО Название - аренда спецтехники для сельского хозяйства</div>
      </StFooterContainer>
    </StFooter>
  );
};
