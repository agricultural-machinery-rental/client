import { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { type TFormProps, StFieldset } from './';
import { Input } from '@/components/UI/Input/Input';
import { Textarea } from '@/components/UI/Textarea';
import { Error } from '@/components/UI/Error';

export const Form: FC<TFormProps> = ({
  title,
  header,
  footer,
  fileds,
  handleFormSubmit,
  defaultValues,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur', defaultValues: useMemo(() => defaultValues, [defaultValues]) });

  return (
    <>
      {header}
      {title}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <StFieldset>
          {fileds.map(({ kindOfField, name, ...rest }) => (
            <div key={`field-${name}`}>
              {kindOfField === 'input' ? (
                <Input name={name} register={register} {...rest} />
              ) : (
                <Textarea key={`textarea-${name}`} name={name} register={register} {...rest} />
              )}
              {errors[name] && <Error errorMessage={errors[name]?.message?.toString()} />}
            </div>
          ))}
        </StFieldset>
        {footer}
        {/* <Error errorMessage='' /> TODO настроить error from backend */}
      </form>
    </>
  );
};
