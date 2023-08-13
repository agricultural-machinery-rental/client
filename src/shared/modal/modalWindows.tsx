import { AuthForm } from '@/widgets/user/Auth';
import { BookingForm } from '@/widgets/user/Booking';
import { BookingSuccess } from '@/widgets/user/Booking';
import { PasswordReset } from '@/widgets/user/PasswordReset';
import { SignupForm } from '@/widgets/user/Signup';

export enum modalWindows {
  signin = 'signin',
  passwordReset = 'passwordReset',
  signup = 'signup',
  booking = 'booking',
  bookingSuccess = 'bookingSuccess',
}

export const modalWindowContent = {
  [modalWindows.signin]: <AuthForm />,
  [modalWindows.passwordReset]: <PasswordReset />,
  [modalWindows.signup]: <SignupForm />,
  [modalWindows.booking]: <BookingForm />,
  [modalWindows.bookingSuccess]: <BookingSuccess />,
} as const;
