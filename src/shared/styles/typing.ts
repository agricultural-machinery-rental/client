export type TFlexProps = {
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
