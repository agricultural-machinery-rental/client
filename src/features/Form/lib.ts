import { Input } from '@/components/UI/Input/Input';
import { Textarea } from '@/components/UI/Textarea';
import { Checkbox } from '@/components/UI/Checkbox';
import type { TKindOfField } from './typing';

export const switchFieldComponent = (
  kindOfField: TKindOfField,
): typeof Input | typeof Textarea | typeof Checkbox => {
  switch (kindOfField) {
    case 'textarea':
      return Textarea;
    case 'checkbox':
      return Checkbox;
    default:
      return Input;
  }
};
