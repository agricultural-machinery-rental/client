'use client';
import { Form, signupConfig } from '@/components/Form';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Form fileds={signupConfig} title='Авторизация' handleFormSubmit={() => console.log()} />
    </main>
  );
}
