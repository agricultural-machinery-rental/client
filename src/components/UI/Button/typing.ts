export type TButton = {
  label?: string;
  $designType?: DesignType;
};

export enum DesignType {
  Primary = 'primary',
  Secondary = 'secondary',
}
