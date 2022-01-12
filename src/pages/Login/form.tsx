import React, { useState } from 'react';
import styled from 'styled-components';
import { ILoginForm } from '.';
import { Input } from '../../components/input';
import { InputWithSubmit } from '../../components/input-with-submit';
import logoImage from '../../assets/logo.png';

interface Props {
  submit: (e: ILoginForm) => void
}

export function LoginForm({ submit }: Props) {
  const [form, setForm] = useState({ email: '', password: '' });

  const processForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(form);
  };

  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <form onSubmit={processForm}>
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
      </form>
    </Container>
  );
}

const Container = styled.div`

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 300px;
  }

  form > .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  
  form > .header > .subtitle {
    font-size: 18px;
    color: white;
    font-weight: 100;
  }

`;
