import React from 'react';
import styled from 'styled-components';
import { IBook } from '../../models/Books';

interface Props {
  book: IBook
}

const fallbackImg = 'https://d2drtqy2ezsot0.cloudfront.net/Book-7.jpg';

export function BookDetail({ book }: Props) {
  const authors = book.authors.map((e) => e).join(', ');
  const pageCount = `${book.pageCount} páginas`;
  const publisher = `Editora ${book.publisher}`;

  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <div className="left">
        <img alt="capa do livro" src={book.imageUrl || fallbackImg} />
      </div>
      <div className="right">
        <div className="top">
          <span className="title">{book.title}</span>
          <span className="purple">{authors}</span>
        </div>
        <div className="center">
          <div className="row">
            <span className="bold">INFORMAÇÕES</span>
          </div>
          <div className="row">
            <span className="bold">Páginas</span>
            <span className="gray">{pageCount}</span>
          </div>
          <div className="row">
            <span className="bold">Editora</span>
            <span className="gray">{publisher}</span>
          </div>
          <div className="row">
            <span className="bold">Publicação</span>
            <span className="gray">{book.published}</span>
          </div>
          <div className="row">
            <span className="bold">Idioma</span>
            <span className="gray">{book.language}</span>
          </div>
          <div className="row">
            <span className="bold">Título Original</span>
            <span className="gray">{book.title}</span>
          </div>
          <div className="row">
            <span className="bold">ISBN-10</span>
            <span className="gray">{book.isbn10}</span>
          </div>
          <div className="row">
            <span className="bold">ISBN-13</span>
            <span className="gray">{book.isbn13}</span>
          </div>
        </div>
        <div className="bottom">
          <span className="bold">RESENHA DA EDITORA</span>
          <div>
            <i className="fas fa-quote-left fa-lg" style={{ color: '#999', paddingRight: 10 }} />
            <span className="gray">{book.description}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`

  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .left {
    display: grid;
    place-items: center;   
  }

  img {
    max-width: 300px;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 400px;
  }

  .right > .top {
    display: flex;
    flex-direction: column;
  }

  .right > .center { };
  .right > .center > .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .right > .bottom {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .bold {
    font-weight: bold;
    font-size: 0.7rem;
  }

  .purple {
    color: #ab2680;
    font-size: 0.7rem;
  }

  .gray {
    color: #999;
    font-size: 0.7rem;
  }

`;
