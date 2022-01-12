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
 * @returns Input simples transparente, é controlado (exige value) e tem label flutuante
 */
export function Input({
  name, label, type, value, onChange,
}: Props) {
  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} value={value} onChange={(e) => onChange(e)} />
    </Container>
  );
}

const Container = styled.div`

  input {
    background: rgba(0,0,0,0.32);
    border: 0;
    border-radius: 3px;
    padding: 20px;
    color: rgba(255,255,255,1);
    outline-width: 0;
    width: 100%;
  }

`;
