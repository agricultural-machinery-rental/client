import { FC } from 'react';
import { StFooterColumn, StFooterColumnTitle, StFooterLink, type TFooterColumn } from './';

export type TFooterBlockProps = {
  col: TFooterColumn;
};

export const FooterBlock: FC<TFooterBlockProps> = ({ col }) => {
  return (
    <StFooterColumn $flexDirection='column' $gap={8}>
      <StFooterColumnTitle $fontSize={1.5} $lineHeight={2} $fontWeight={400}>
        {col.title}
      </StFooterColumnTitle>
      {col.lines.map((row, index) => {
        if (row.link) {
          return (
            <StFooterLink href={row.link} key={`footer-item-${index}`}>
              {row.text}
            </StFooterLink>
          );
        }
        return <div key={`footer-item-${index}`}>{row.text}</div>;
      })}
    </StFooterColumn>
  );
};
