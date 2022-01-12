import React from 'react';
import styled from 'styled-components';
import { IBook } from '../../models/Books';
import { CardBook } from './Book';

interface Props {
  books: IBook[]
}

/**
 *
 * @param param0 lista de livros: Ibook[]
 * @returns Lista em css grid dos livros, mostra 50 por página
 */
export function Grid({ books }: Props) {
  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      {books.map((e) => (<CardBook key={e.id} book={e} />))}
    </Container>
  );
}

const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  align-content: space-between;
  justify-content: space-around;

`;