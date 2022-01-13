import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './pagination';

describe('Pagination', () => {
  it('Verifica se paginação tem os parametros informados', () => {
    // renderiza pagination
    render(<Pagination max={20} page={2} setPage={() => null} />);

    // esse comp cria duas divs com o mesmo texto
    // para posicionar de acordo com os media queries
    expect(screen.getAllByText(20)).toHaveLength(2);
    expect(screen.getAllByText(2)).toHaveLength(2);
  });
});
