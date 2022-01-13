import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SDK } from '../../sdk';
import { Header } from './header';
import { Storage } from '../../libs/storage';
import { IBook } from '../../models/Books';
import { Grid } from './Grid';
import { Pagination } from './Pagination';

/**
 *
 * @returns Verifica se tem token de login salvo
 * E o atualiza pela api /auth/refresh-token
 * Se nao tiver ou nao puder ser atualizado,
 * redireciona para login
 */
async function updateAuthAndRefreshToken(): Promise<boolean> {
  const authorization = Storage.getItem('authorization');
  const token = Storage.getItem('refresh-token');

  if (!authorization) return false;
  if (!token) return false;

  const sdk = new SDK();
  const api = await sdk.refreshToken(token, authorization);
  if (!api.success) return false;

  Storage.setItem('authorization', api.auth_token);
  Storage.setItem('refresh-token', api.refresh_token);
  return true;
}

/**
 *
 * @returns Lista e detalhes de livros
 * Como existe só uma pagina privada
 * faço a validacao e refresh de login
 * na propria pagina, ao inves de usar o router-dom
 */
export function HomePage() {
  const navigate = useNavigate();

  const [books, setBooks] = useState<IBook[]>([]);
  const [page, setPage] = useState<number>(1);

  const getBooks = async () => {
    const sdk = new SDK();
    const api = await sdk.getBooks(Storage.getItem('authorization'), page);
    setBooks(api.data);
  };

  const validateLoginAndGetBooks = async () => {
    const hasValidToken = await updateAuthAndRefreshToken();
    if (!hasValidToken) navigate('/');
    getBooks();
  };

  // valida login e atualiza o token a cada 20 minutos
  useEffect(() => {
    validateLoginAndGetBooks();

    setInterval(() => {
      validateLoginAndGetBooks();
    }, 20 * 60 * 1000);
  }, []);

  // atualiza a lista de livros sempre que mudar a pagina
  useEffect(() => { getBooks(); }, [page]);

  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <Header />
      <Grid books={books} />
      <Pagination page={page} max={10} setPage={setPage} />
    </Container>
  );
}

const Container = styled.div`

  background-color: #eee;
  // especifica scroll para nao perder background color
  overflow-y: scroll;

`;
