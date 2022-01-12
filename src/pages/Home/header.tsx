import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/logo-preto.png';

export function Header() {
  const storage = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <div className="left">
        <img alt="logo ioasys" src={logoImage} />
        <span className="subtitle">Books</span>
      </div>
      <div className="right">
        <span className="user-name">{storage.name}</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    .user-name { display: none };
  }

`;
