import { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { type TFormProps, StFieldset } from './';
import { Input } from '@/components/UI/Input/Input';
import { Textarea } from '@/components/UI/Textarea';

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
          {fileds.map(({ kindOfField, name, ...rest }) => {
            return kindOfField === 'input' ? (
              <Input
                key={`input-${name}`}
                name={name}
                register={register}
                errorMessage={errors[name]?.message?.toString()}
                {...rest}
              />
            ) : (
              <Textarea
                key={`textarea-${name}`}
                name={name}
                register={register}
                errorMessage={errors[name]?.message?.toString()}
                {...rest}
              />
            );
          })}
        </StFieldset>
        {footer}
        <div className='error-from-backend'></div>
      </form>
    </>
  );
};
