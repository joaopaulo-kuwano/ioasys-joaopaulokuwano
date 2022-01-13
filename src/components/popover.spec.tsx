import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './input';
import { PopOver } from './popover';

describe('Popover', () => {
  it('Verifica se popover contém mensagem desejada', () => {
    const message = 'placeholder popover';

    // renderiza popover
    render(<PopOver message={message} />);

    // verifica foi criado
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
