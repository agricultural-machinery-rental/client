export type TButton = {
  label?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
};
