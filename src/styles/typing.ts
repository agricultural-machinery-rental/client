export type TFlexProps = {
  $flexDirection?: 'column' | 'row';
  $justifyContent?: string;
  $alignItems?: string;
  $gap?: number;
};

export type TNextLink = {
  $justifyContent?: 'center' | 'flex-end' | 'flex-start';
};

export type TTextBoxProps = {
  $textAlign?: string;
  $fontWeight?: number;
  $fontSize?: number;
  $lineHeight?: number;
};
