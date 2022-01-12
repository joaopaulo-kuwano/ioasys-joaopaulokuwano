import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SDK } from '../../sdk';

/**
 *
 * @returns Lista e detalhes de livros
 * Como existe só uma pagina privada
 * faço a validacao e refresh de login
 * na propria pagina, ao inves de usar o router-dom
 */
export function HomePage() {
  const navigate = useNavigate();

  const refreshTokenOrRedirect = async () => {
    const authorization = localStorage.getItem('authorization');
    // eslint-disable-next-line camelcase
    const refresh_token = localStorage.getItem('refresh-token');

    if (!authorization) return navigate('/');
    // eslint-disable-next-line camelcase
    if (!refresh_token) return navigate('/');

    const sdk = new SDK();
    const api = await sdk.refreshToken(refresh_token, authorization);
    if (!api.success) return navigate('/');

    localStorage.setItem('authorization', api.auth_token);
    localStorage.setItem('refresh-token', api.refresh_token);
    return null;
  };

  useEffect(() => {
    refreshTokenOrRedirect();
  }, []);

  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <span>BOOKS ROUTE</span>
    </Container>
  );
}

const Container = styled.div`



`;
