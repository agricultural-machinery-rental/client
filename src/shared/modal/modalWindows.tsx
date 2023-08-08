import { AuthForm } from '@/widgets/Auth';

export enum modalWindows {
  signin = 'signin',
}

export const modalWindowContent = {
  [modalWindows.signin]: <AuthForm />,
} as const;
