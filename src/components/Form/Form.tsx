import { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import {
  type TFormProps,
  StFieldset,
  StFieldWrapper,
  StAsterick,
  StRelativeBox,
  ValidationPattern,
} from './';
import { Input } from '@/components/UI/Input/Input';
import { Textarea } from '@/components/UI/Textarea';
import { Checkbox } from '@/components/UI/Checkbox';
import { DateRange } from '@/entities/DateRange';
import { Error } from '@/components/UI/Error';
import { StFlex } from '@/styles/global';

export const Form: FC<TFormProps> = ({
  header,
  footer,
  fileds,
  handleFormSubmit,
  defaultValues,
  classNames,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm({ mode: 'onBlur', defaultValues: useMemo(() => defaultValues, [defaultValues]) });

  const inputElementSwitch = (
    kindOfField: string,
  ): [typeof Input | typeof Textarea | typeof Checkbox | typeof DateRange, object] => {
    switch (kindOfField) {
      case 'textarea':
        return [Textarea, {}];
      case 'checkbox':
        return [Checkbox, {}];
      case 'daterange':
        return [DateRange, { setValue: setValue }];
      default:
        return [Input, {}];
    }
  };

  return (
    <StFlex $justifyContent='center' $alignItems='center'>
      {header}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <StFieldset className={classNames.fieldset}>
          {fileds.map(({ kindOfField, name, asterisk, required, pattern, ...rest }, key) => {
            const registerOptions = {
              ...(required && { required: 'Поле не может быть пустым' }),
              ...(pattern && { pattern: ValidationPattern[pattern] }),
            };

            const [InputElement, inputElementAdditionalProps] = inputElementSwitch(kindOfField);

            return (
              <StFieldWrapper key={key} className={classNames.field}>
                <StRelativeBox>
                  {asterisk && <StAsterick visibility={asterisk}>*</StAsterick>}
                  <InputElement
                    name={name}
                    register={register(name, registerOptions)}
                    watch={watch}
                    required={required}
                    pattern={pattern}
                    {...inputElementAdditionalProps}
                    {...rest}
                  />
                </StRelativeBox>
                <Error errorMessage={errors[name]?.message?.toString()} />
              </StFieldWrapper>
            );
          })}
        </StFieldset>
        <button type='submit'>Submit</button>
        {footer}
        {/* <Error errorMessage='' /> TODO настроить error from backend */}
      </form>
    </StFlex>
  );
};
