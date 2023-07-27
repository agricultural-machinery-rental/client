import { ChangeEventHandler, FC } from 'react';
import { StTextarea } from './styled';
import { TTextarea } from './typing';

export const Textarea: FC<TTextarea> = ({ value, onChange, resize }) => {
  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = e => {
    e.preventDefault();
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return <StTextarea value={value} onChange={onChangeHandler} $resize={resize} />;
};
