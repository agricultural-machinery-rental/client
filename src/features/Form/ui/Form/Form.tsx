import { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { ValidationPattern } from '../../consts';
import { Field } from '../Field/Field';
import { StFieldset } from './styled';
import type { TFormProps } from '../../typing';

export const Form: FC<TFormProps> = ({
  footer,
  fileds,
  handleFormSubmit,
  defaultValues,
  asterisk,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm({ mode: 'onBlur', defaultValues: useMemo(() => defaultValues, [defaultValues]) });

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <StFieldset>
        {fileds.map(({ kindOfField, name, required, pattern, ...rest }, key) => {
          const registerOptions = {
            ...(required && { required: 'Поле не может быть пустым' }),
            ...(pattern && { pattern: ValidationPattern[pattern] }),
          };

          return (
            <Field
              key={key}
              kindOfField={kindOfField}
              asterisk={asterisk}
              name={name}
              errorMessage={errors[name]?.message?.toString()}
              required={required}
              register={register(name, registerOptions)}
              watch={watch}
              setValue={setValue}
              {...rest}
            />
          );
        })}
      </StFieldset>
      {footer}
      {/* <Error errorMessage='' /> TODO настроить error from backend */}
    </form>
  );
};
