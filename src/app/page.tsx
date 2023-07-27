'use client';
import { Form, callbackConfig } from '@/components/Form';

export default function Home() {
  const defaultValues = {
    firstNname: 'Login',
    phone: '7',
  };
  return (
    <main>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <Form
        fileds={callbackConfig}
        title='Авторизация'
        handleFormSubmit={() => console.log()}
        defaultValues={defaultValues}
      />
    </main>
  );
}
