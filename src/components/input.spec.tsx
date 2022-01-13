import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './input';

describe('Input', () => {
  let value = '';

  const setup = () => {
    const utils = render(<Input
      value={value}
      name="email"
      label="Email"
      type="text"
      onChange={(e) => { value = e.target.value; }}
    />);
    const input = utils.getByLabelText('email');
    return {
      input,
      ...utils,
    };
  };

  it('Altera value a partir do onChange do input', () => {
    const { input } = setup();

    // espera que o label tenha sido atribuido ao componente
    expect(input).toBeTruthy();

    // seta value
    fireEvent.change(input, { target: { value: '123' } });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(value).toBe('123');
  });
});
