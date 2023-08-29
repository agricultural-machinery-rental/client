import { FC } from 'react';

import { StTextBox } from '@/shared/styles/global';

import { StFooterColumn, StFooterGrid, StFooterLink } from './styled';
import { type TFooterColumn } from './typing';

export type TFooterBlockProps = {
  col: TFooterColumn;
};

export const FooterBlock: FC<TFooterBlockProps> = ({ col }) => {
  return (
    <StFooterColumn $flexDirection='column' $gap={32}>
      <StTextBox $fontSize={0.75} $lineHeight={1.25} $fontWeight={400}>
        {col.title}
      </StTextBox>
      <StFooterGrid>
        {col.lines.map((row, index) => {
          if (row.link) {
            return (
              <div key={`footer-item-${index}`}>
                <StFooterLink href={row.link}>{row.text}</StFooterLink>
              </div>
            );
          }
          return <div key={`footer-item-${index}`}>{row.text}</div>;
        })}
      </StFooterGrid>
    </StFooterColumn>
  );
};
