export type TFlex = {
  $flexDirection?: 'column' | 'row';
  $justifyContent?:
    | 'center'
    | 'left'
    | 'right'
    | 'end'
    | 'start'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'inherit';
  $alignItems?: 'center' | 'flex-start' | 'flex-end' | 'inherit';
  $gap?: number;
  $flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

export type TNextLink = {
  $justifyContent?: 'center' | 'flex-end' | 'flex-start';
};

export type TTextBox = {
  $textAlign?: 'center' | 'left' | 'right' | 'inherit';
  $fontWeight?: number;
  $fontSize?: number;
  $lineHeight?: number;
};

export type THeading2 = {
  $margin?: string;
  $textAlign?: string;
};
