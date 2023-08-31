import { render, screen } from '@testing-library/react';

import type { TField } from './typing';
import { Field } from './ui';

const initialProps: TField = {
  kindOfField: 'input',
  name: 'firstName',
  required: true,
};

describe('Form field', () => {
  it('should render component', () => {
    render(<Field type={'text'} {...initialProps} />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  it('should render with asterisk', () => {
    render(<Field asterisk={true} {...initialProps} />);

    const asterisk = screen.getByText('*');

    expect(asterisk).toBeInTheDocument();
  });

  it('should render without asterisk', () => {
    render(<Field asterisk={false} {...initialProps} />);

    const asterisk = screen.queryByText('*');

    expect(asterisk).toBeNull();
  });

  it('should render error message', () => {
    render(<Field errorMessage={'Ошибка'} {...initialProps} />);

    const error = screen.getByText('Ошибка');

    expect(error).toBeInTheDocument();
  });
});
