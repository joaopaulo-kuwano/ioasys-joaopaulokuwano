import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IBook } from '../models/Books';
import { CardBook } from './book';

describe('Book (card da lista)', () => {
  it('Verifica se o card mostra todos as propriedades desejadas', () => {
    const book: IBook = {
      authors: ['JoaoP'],
      category: 'Romance',
      description: 'resenha',
      id: '123',
      imageUrl: 'https://imgur',
      isbn10: '10',
      isbn13: '13',
      language: 'portugues',
      pageCount: 43,
      published: 2010,
      publisher: 'editora',
      title: 'brilho',
    };

    const pageCount = `${book.pageCount} páginas`;
    const publisher = `Editora ${book.publisher}`;
    const published = `Publicado em ${book.published}`;

    // renderiza card
    render(<CardBook book={book} openBookDetails={() => null} />);

    // verifica se tem todos os campos
    expect(screen.getByText(book.title)).toBeInTheDocument();
    expect(screen.getByText(pageCount)).toBeInTheDocument();
    expect(screen.getByText(publisher)).toBeInTheDocument();
    expect(screen.getByText(published)).toBeInTheDocument();
  });
});
