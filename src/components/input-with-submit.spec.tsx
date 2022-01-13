import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputWithSubmit } from './input-with-submit';

describe('Input com Submit', () => {
  let value = '';

  const setup = () => {
    const utils = render(<InputWithSubmit
      value={value}
      name="password"
      label="Senha"
      type="password"
      onChange={(e) => { value = e.target.value; }}
    />);
    const input = utils.getByLabelText('password');
    const inputSubmit = utils.getByLabelText('input-submit');
    return {
      input,
      inputSubmit,
      ...utils,
    };
  };

  it('Verifica se os dois inputs foram criados', () => {
    const { input, inputSubmit } = setup();
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: '123' } });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(value).toBe('123');
    userEvent.click(inputSubmit);
    expect(inputSubmit).toBeTruthy();
  });
});
