import React from 'react';
import styled from 'styled-components';
import { IBook } from '../models/Books';

interface Props {
  book: IBook
  openBookDetails: (e: IBook) => void
}

const fallbackImg = 'https://d2drtqy2ezsot0.cloudfront.net/Book-7.jpg';

/**
 *
 * @param param0 book: IBook
 * @returns Card da lista de livros e handler para visão detalhada
 */
export function CardBook({ book, openBookDetails }: Props) {
  const pageCount = `${book.pageCount} páginas`;
  const publisher = `Editora ${book.publisher}`;
  const published = `Publicado em ${book.published}`;

  return (
    // eslint-disable-next-line no-use-before-define
    <Container onClick={() => openBookDetails(book)}>
      <div className="left">
        <img alt="capa do livro" src={book.imageUrl || fallbackImg} />
      </div>
      <div className="right">
        <div className="right-top">
          <span className="title">{book.title}</span>
        </div>
        <div className="right-bottom">
          <span className="text">{pageCount}</span>
          <span className="text">{publisher}</span>
          <span className="text">{published}</span>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`

  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 2rem 1rem;
  gap: 1rem;
  background-color: white;
  border-radius: 5px;

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .right-bottom {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100px;
    object-fit: contain;
  }

  .title {
    font-weight: bold;
    // font-size: 0.8rem;
  }

  .text {
    font-size: 0.8rem;
    color: #999;
  }

`;
