import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import type { TForm } from './typing';
import { Form } from './ui';

const initialProps: TForm = {
  fields: [
    {
      kindOfField: 'input',
      name: 'login',
      required: true,
      type: 'text',
    },
    {
      kindOfField: 'input',
      name: 'email',
      required: true,
      type: 'email',
    },
  ],
  handleFormSubmit: jest.fn(),
  footer: <button type='submit'>Submit</button>,
};

describe('Form', () => {
  it('should render form', () => {
    render(<Form {...initialProps} />);

    const form = document.querySelector('form');
    const fieldset = screen.getByRole('group');

    expect(form).toBeInTheDocument();
    expect(fieldset).toBeInTheDocument();
  });

  it('should not call handleSubmit function', async () => {
    render(<Form {...initialProps} />);

    const button = screen.getByRole('button');

    await user.click(button);

    expect(initialProps.handleFormSubmit).toHaveBeenCalledTimes(0);
  });

  it('should call handleSubmit function', async () => {
    render(<Form {...initialProps} />);

    const button = screen.getByRole('button');

    const loginInput = screen.getByLabelText('login', { selector: 'input' });
    const emailInput = screen.getByLabelText('email', { selector: 'input' });

    expect(loginInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    await user.type(loginInput, 'leo');
    await user.type(emailInput, 'leo@leo.com');

    expect(loginInput).toHaveValue('leo');
    expect(emailInput).toHaveValue('leo@leo.com');

    await user.click(button);

    expect(initialProps.handleFormSubmit).toHaveBeenCalledTimes(1);
  });
});
