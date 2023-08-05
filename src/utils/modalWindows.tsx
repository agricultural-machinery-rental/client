import { AuthForm } from '@/widgets/auth';

export enum modalWindows {
  signin = 'signin',
  signup = 'signup',
  passwordRecovery = 'passwordRecovery',
  createPassword = 'createPassword',
}

export const modalWindowContent = {
  [modalWindows.signin]: <AuthForm />,
} as const;
