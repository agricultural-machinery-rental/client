'use client';
import styled from 'styled-components';
import { Form, callbackConfig } from '@/components/Form';

const StMain = styled.main`
  padding: 80px 0 0;

  & .fieldset {
    flex-direction: column;
  }
`;

export default function Home() {
  const defaultValues = {
    firstNname: 'Login',
    phone: '7',
  };
  const classes = {
    fieldset: 'fieldset',
  };
  return (
    <StMain>
      <h1>Home</h1>
      <Form fileds={callbackConfig} handleFormSubmit={() => console.log()} classNames={classes} />
    </StMain>
  );
}
