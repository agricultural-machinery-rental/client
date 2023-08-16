import { type TKindOfField } from '@/shared/form';
import { Checkbox } from '@/shared/ui/Checkbox';
import { DateRange } from '@/shared/ui/DateRange';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput';
import { Textarea } from '@/shared/ui/Textarea';

export const switchFieldComponent = (
  kindOfField: TKindOfField,
): typeof Input | typeof Textarea | typeof Checkbox | typeof DateRange | typeof PasswordInput => {
  switch (kindOfField) {
    case 'textarea':
      return Textarea;
    case 'checkbox':
      return Checkbox;
    case 'daterange':
      return DateRange;
    case 'passwordInput':
      return PasswordInput;
    default:
      return Input;
  }
};
