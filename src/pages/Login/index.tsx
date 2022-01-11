import React, { useState } from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/bg-image.png';
import logoImage from '../../assets/logo.png';

export function LoginPage() {
  const [form, setForm] = useState({ email: '', pass: '' });
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email || !form.pass) {
      setError('Preencha email e senha');
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
          <div className="form-group">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            {/* <label htmlFor="email">Email</label> */}
            <input name="email" type="text" />
          </div>
          <div className="form-group">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <input name="senha" type="password" />
            <input type="submit" value="Entrar" />
          </div>
          {error && (
            <div className="box">
              <div className="box-arrow-border">
                <div className="box-arrow-background" />
              </div>
              <div className="box-content">{error}</div>
            </div>
          )}
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

  input {
    background: rgba(0,0,0,0.32);
    // opacity: 0.32;
    border: 0;
    border-radius: 3px;
    padding: 20px;
    color: rgba(255,255,255,1);
    outline-width: 0;
    width: 100%;
  }

  .form-group > label {
    top: 18px;
    left: 5px;
    position: relative;
    background-color: transparent;
    padding: 0px 5px 0px 5px;
    font-size: 0.9em;
  }

  .form-group {
    position: relative;
  }

  input[type="password"] {
    padding-right: 70px;
  }

  input[type="submit"] {
    position: absolute;
    right: 5px; 
    top: 8px;
    bottom: 8px;
    border: 0;
    background: #fff;
    color: #B22E6F;
    font-weight: bold;
    outline: none;
    margin: 0;
    padding: 0 10px;
    border-radius: 20px;
    z-index: 1;
    margin-left: -70px;
    width: 70px;
  }

  /* .popover { 
    height: 100px;
    width: 300px;
    margin: 30px;
    background: linear-gradient(#333, #222);
    -o-border-radius: 4px;
    -ms-border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
  }

.popover:before {
  content: " ";
  border-top: 11px solid #222;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  position: relative;
  top: 111px;
  right: -140px;
} */

  div.box {
    position: relative;
    background: rgba(255,255,255,0.4);
    border-radius: 30px;
  }

  div.box-arrow-border {
    position: absolute;
    top: -9px; left: 33px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid black;
    width: 0; height: 0;
  }

  div.box-arrow-background {
    position: absolute;
    left: -10px; top: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    width: 0; 
    height: 0;
    opacity: 0.7;
  }

  div.box-content {
    // border: 1px solid rgba(0, 0, 0, 0.15);
    font-weight: bold;
    color: white;
    padding: 1rem;
  }

`;
