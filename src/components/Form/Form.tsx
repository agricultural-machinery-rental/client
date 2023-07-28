import { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { type TFormProps, StFieldset, StFieldWrapper, StAsterick, StRelativeBox } from './';
import { Input } from '@/components/UI/Input/Input';
import { Textarea } from '@/components/UI/Textarea';
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
  } = useForm({ mode: 'onBlur', defaultValues: useMemo(() => defaultValues, [defaultValues]) });

  return (
    <StFlex $justifyContent='center' $alignItems='center'>
      {header}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <StFieldset className={classNames.fieldset}>
          {fileds.map(({ kindOfField, name, asterisk, ...rest }) => (
            <StFieldWrapper key={`field-${name}`} className={classNames.field}>
              <StRelativeBox>
                {asterisk && <StAsterick visibility={asterisk}>*</StAsterick>}
                {kindOfField === 'input' ? (
                  <Input name={name} register={register} {...rest} />
                ) : (
                  <Textarea name={name} register={register} {...rest} />
                )}
              </StRelativeBox>
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <Error errorMessage={message} />}
              />
            </StFieldWrapper>
          ))}
        </StFieldset>
        {footer}
        {/* <Error errorMessage='' /> TODO настроить error from backend */}
      </form>
    </StFlex>
  );
};
