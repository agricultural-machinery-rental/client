import { Input } from '@/components/UI/Input/Input';
import { Textarea } from '@/components/UI/Textarea';
import { Checkbox } from '@/components/UI/Checkbox';
import { DateRange } from '@/shared/DateRange';
import type { TKindOfField } from './typing';

export const switchFieldComponent = (
  kindOfField: TKindOfField,
): typeof Input | typeof Textarea | typeof Checkbox | typeof DateRange => {
  switch (kindOfField) {
    case 'textarea':
      return Textarea;
    case 'checkbox':
      return Checkbox;
    case 'daterange':
      return DateRange;
    default:
      return Input;
  }
};
