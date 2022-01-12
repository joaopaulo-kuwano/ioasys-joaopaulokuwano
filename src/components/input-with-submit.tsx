import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 *
 * @param param0 Controle de input (value, label, onChange, type e name)
 * @returns Input duplo, tem um campo de conteudo com um input submit na direita para envio do form
 */
export function InputWithSubmit({
  name, label, type, value, onChange,
}: Props) {
  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <label htmlFor={name}>{label}</label>
      <input name={name} value={value} onChange={onChange} type={type} className="input-conteudo" />
      <input type="submit" value="Entrar" className="input-submit" />
    </Container>
  );
}

const Container = styled.div`

  position: relative;

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

  .input-conteudo {
    padding-right: 70px;
  }

  .input-submit {
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

`;
