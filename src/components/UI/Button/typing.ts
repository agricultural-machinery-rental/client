export type TButton = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode;
};
