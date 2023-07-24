export type TButton = {
  label?: string;
  designType?: 'primary' | 'secondary';
  sizeType?: 'small' | 'medium' | 'large';
  shape?: 'round' | 'square';
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
};

export enum DesignType {
  Primary = 'primary',
  Secondary = 'secondary',
}
