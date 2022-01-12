import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import backgroundImage from '../../assets/bg-image.png';
import { PopOver } from '../../components/popover';
import { Storage } from '../../libs/storage';
import { SDK } from '../../sdk';
import { LoginForm } from './form';

export interface ILoginForm {
  email: string
  password: string
}

export function LoginPage() {
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const dispatchError = (err: string, duration = 6000) => {
    setError(err);
    setTimeout(() => setError(''), duration);
  };

  const submit = async (e: ILoginForm) => {
    if (!e.email || !e.password) {
      dispatchError('Preencha email e senha');
      return;
    }

    const sdk = new SDK();
    const api = await sdk.signIn(e);

    if (!api.success) {
      dispatchError('Email e/ou senha incorretos');
      return;
    }

    Storage.setItem('authorization', api.auth_token);
    Storage.setItem('refresh-token', api.refresh_token);
    Storage.setItem('user', JSON.stringify(api.data));
    navigate('/home');
  };

  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <div className="center-box">
        <LoginForm submit={submit} />
        {error && (<PopOver message={error} />)}
        {!error && (<div style={{ height: 50 }} />)}
      </div>
    </Container>
  );
}

/** Para o formulario flutuar na esquerda
 * divido a pagina em 2 grids
 * e alinho na centro do primeiro grid
 */
const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 746px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 2rem;
  }

  background-image: url(${backgroundImage});
  background-size: cover;
  
  .center-box {
    grid-column: 1/2;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @keyframes opacityFrame {
    from {opacity: 0;}
    to {opacity: 1;}
  }

`;
