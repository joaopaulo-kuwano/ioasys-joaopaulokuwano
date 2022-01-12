import React, { useState } from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/bg-image.png';
import { PopOver } from '../../components/popover';
import { SDK } from '../../sdk';
import { LoginForm } from './form';

export interface ILoginForm {
  email: string
  password: string
}

export function LoginPage() {
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

    localStorage.setItem('authorization', api.auth_token);
    localStorage.setItem('user', JSON.stringify(api.data));
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

  .center-box > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 300px;
  }

  .center-box > form > .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  
  .center-box > form > .header > .subtitle {
    font-size: 18px;
    color: white;
    font-weight: 100;
  }

  @keyframes opacityFrame {
    from {opacity: 0;}
    to {opacity: 1;}
  }

`;
