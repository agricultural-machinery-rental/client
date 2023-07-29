'use client';
import styled from 'styled-components';
import { Form, signupConfig } from '@/components/Form';

const StMain = styled.main`
  padding: 80px 0 0;

  & .fieldset {
    flex-direction: column;
  }
`;

export default function Home() {
  const defaultValues = {
    firstName: 'Login',
    phone: '7',
  };
  const classes = {
    fieldset: 'fieldset',
  };
  return (
    <StMain>
      <h1>Home</h1>
      <Form
        fileds={signupConfig}
        handleFormSubmit={() => console.log()}
        defaultValues={defaultValues}
        classNames={classes}
      />
    </StMain>
  );
}
