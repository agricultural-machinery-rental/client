import { AuthForm } from '@/widgets/user/Auth';
import { PasswordReset } from '@/widgets/user/PasswordReset';

export enum modalWindows {
  signin = 'signin',
  passwordReset = 'passwordReset',
}

export const modalWindowContent = {
  [modalWindows.signin]: <AuthForm />,
  [modalWindows.passwordReset]: <PasswordReset />,
} as const;
