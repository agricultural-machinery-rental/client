import { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { validationPattern, type TFormData } from '@/shared/form';

import { Field } from './Field';
import { StFieldset } from './styled';
import type { TForm } from './typing';

export const Form: FC<TForm> = ({ footer, fields, handleFormSubmit, defaultValues, asterisk }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm<TFormData>({
    mode: 'onBlur',
    defaultValues: useMemo(() => defaultValues, [defaultValues]),
  });

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <StFieldset className='fieldset'>
        {fields.map(({ kindOfField, name, required, pattern, ...rest }, key) => {
          const registerOptions = {
            ...(required && { required: 'Поле не может быть пустым' }),
            ...(pattern && { pattern: validationPattern[pattern] }),
            ...(name === 'passwordRepeat' && {
              validate: (val: unknown) => {
                if (val !== watch('password')) {
                  return 'Пароли не совпадают';
                }
              },
            }),
          };

          return (
            <Field
              key={key}
              kindOfField={kindOfField}
              asterisk={asterisk}
              name={name}
              errorMessage={errors[name]?.message?.toString()}
              register={register(name, registerOptions)}
              watch={watch}
              setValue={setValue}
              required={required}
              forceDefaultValue={defaultValues?.[name]}
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
