export type TFlexProps = {
  $flexDirection?: 'column' | 'row';
  $justifyContent?: string;
  $alignItems?: string;
  $gap?: number;
  $flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

export type TNextLink = {
  $justifyContent?: 'center' | 'flex-end' | 'flex-start';
};

export type TTextBoxProps = {
  $textAlign?: 'center' | 'left' | 'right' | 'inherit';
  $fontWeight?: number;
  $fontSize?: number;
  $lineHeight?: number;
};
