import {
  FooterBlock,
  StFooter,
  StFooterContainer,
  StFooterNetworksWrapper,
  FooterColumns,
} from './';
import { StFlex } from '@/styles/global';
import TelegramSVG from '@/assets/icons/telegram.svg';
import WhatsAppSVG from '@/assets/icons/whatsapp.svg';

export const Footer = () => {
  return (
    <StFooter>
      <StFooterContainer>
        <StFlex>
          {FooterColumns.map((col, index) => (
            <FooterBlock col={col} key={`footer-col-${index}`} />
          ))}
        </StFlex>
        <StFooterNetworksWrapper $justifyContent='flex-end' $gap={32}>
          <TelegramSVG width={40} height={40} />
          <WhatsAppSVG width={40} height={40} />
        </StFooterNetworksWrapper>
        <div>&copy;2023 ООО Название - аренда спецтехники для сельского хозяйства</div>
      </StFooterContainer>
    </StFooter>
  );
};
