export type TDateRange = {
  name: string;
  placeholder?: string;
  required?: boolean;
  register?: (...args: unknown[]) => object;
};
