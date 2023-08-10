import Link from 'next/link';

import { StFlex } from '@/shared/styles/global';

import TelegramSVG from './assets/telegram.svg';
import WhatsAppSVG from './assets/whatsapp.svg';
import { footerColumns } from './constants';
import { FooterBlock } from './FooterBlock';
import { StFooter, StFooterCaption, StFooterContainer } from './styled';

export const Footer = () => {
  return (
    <StFooter>
      <StFooterContainer>
        <StFlex $flexDirection='column'>
          <StFlex>
            {footerColumns.map((col, index) => (
              <FooterBlock col={col} key={`footer-col-${index}`} />
            ))}
          </StFlex>
          <StFlex $justifyContent='space-between' $alignItems='flex-end'>
            <StFooterCaption $fontSize={0.5} $lineHeight={0.66} $fontWeight={400}>
              &copy;2023 ООО Агропарк - аренда спецтехники для сельского хозяйства
            </StFooterCaption>
            <StFlex $justifyContent='flex-end' $gap={32}>
              {/* TODO прописать ссылки, на которые ведут иконки соц.сетей */}
              <Link href='src/widgets/Footer'>
                <TelegramSVG width={40} height={40} />
              </Link>
              <Link href='src/widgets/Footer'>
                <WhatsAppSVG width={40} height={40} />
              </Link>
            </StFlex>
          </StFlex>
        </StFlex>
      </StFooterContainer>
    </StFooter>
  );
};
