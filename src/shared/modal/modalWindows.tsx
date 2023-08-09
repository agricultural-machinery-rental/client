import { AuthForm } from '@/widgets/Auth';
import { SignupForm } from '@/widgets/user/Signup';

export enum modalWindows {
  signin = 'signin',
  example = 'example',
  signup = 'signup',
}

export const modalWindowContent = {
  [modalWindows.signin]: <AuthForm />,
  [modalWindows.signup]: <SignupForm />,
} as const;
