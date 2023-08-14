import { Callback } from '@/widgets/company/Callback';
import { Rules } from '@/widgets/company/Rules';
import { AuthForm } from '@/widgets/user/Auth';
import {
  BookingCancel,
  BookingCancelSuccess,
  BookingForm,
  BookingSuccess,
  BookingEditForm,
} from '@/widgets/user/Booking';
import { Consent } from '@/widgets/user/Consent';
import { NewPassword } from '@/widgets/user/NewPassword';
import { PasswordReset } from '@/widgets/user/PasswordReset';
import { SignupForm } from '@/widgets/user/Signup';

export enum modalWindows {
  signin = 'signin',
  passwordReset = 'passwordReset',
  signup = 'signup',
  rules = 'rules',
  consent = 'consent',
  booking = 'booking',
  bookingSuccess = 'bookingSuccess',
  newPassword = 'newPassword',
  bookingEdit = 'bookingEdit',
  bookingCancel = 'bookingCancel',
  bookingCancelSuccess = 'bookingCancelSuccess',
  callback = 'callback',
}

export const modalWindowContent = {
  [modalWindows.signin]: <AuthForm />,
  [modalWindows.passwordReset]: <PasswordReset />,
  [modalWindows.signup]: <SignupForm />,
  [modalWindows.rules]: <Rules />,
  [modalWindows.consent]: <Consent />,
  [modalWindows.booking]: <BookingForm />,
  [modalWindows.bookingSuccess]: <BookingSuccess />,
  [modalWindows.newPassword]: <NewPassword />,
  [modalWindows.bookingEdit]: <BookingEditForm />,
  [modalWindows.bookingCancel]: <BookingCancel />,
  [modalWindows.bookingCancelSuccess]: <BookingCancelSuccess />,
  [modalWindows.callback]: <Callback />,
} as const;
