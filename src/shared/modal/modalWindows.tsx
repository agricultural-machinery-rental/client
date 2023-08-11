import { Rules } from '@/widgets/company/Rules';
import { AuthForm } from '@/widgets/user/Auth';
import { Consent } from '@/widgets/user/Consent';
import { PasswordReset } from '@/widgets/user/PasswordReset';
import { SignupForm } from '@/widgets/user/Signup';

export enum modalWindows {
  signin = 'signin',
  passwordReset = 'passwordReset',
  signup = 'signup',
  rules = 'rules',
  consent = 'consent',
}

export const modalWindowContent = {
  [modalWindows.signin]: <AuthForm />,
  [modalWindows.passwordReset]: <PasswordReset />,
  [modalWindows.signup]: <SignupForm />,
  [modalWindows.rules]: <Rules />,
  [modalWindows.consent]: <Consent />,
} as const;
