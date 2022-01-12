import React, { useState } from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/bg-image.png';
import logoImage from '../../assets/logo.png';
import { Input } from '../../components/input';
import { InputWithSubmit } from '../../components/input-with-submit';
import { PopOver } from '../../components/popover';

export function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const dispatchError = (err: string, duration = 6000) => {
    setError(err);
    setTimeout(() => setError(''), duration);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      dispatchError('Preencha email e senha');
    }
  };

  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <div className="center-box">
        <form onSubmit={(e) => submit(e)}>
          <div className="header">
            <img alt="logo ioasys" src={logoImage} />
            <span className="subtitle">Books</span>
          </div>
          <Input
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            label=""
            type="email"
          />
          <div className="form-group">
            <InputWithSubmit
              name="senha"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              label=""
              type="password"
            />
          </div>
          {error && (<PopOver message={error} />)}
          {!error && (<div style={{ height: 30 }} />)}
        </form>
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
    
    display: grid;
    place-items: center;
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
