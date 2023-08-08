import { AuthForm } from '@/widgets/Auth';

export enum modalWindows {
  signin = 'signin',
  example = 'example',
}

export const modalWindowContent = {
  [modalWindows.signin]: <AuthForm />,
} as const;
