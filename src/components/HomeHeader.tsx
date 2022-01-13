/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/logo-preto.png';
import { Storage } from '../libs/storage';

export function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(Storage.getItem('user') || '{}');

  const logout = () => {
    Storage.removeItem('user');
    Storage.removeItem('authorization');
    Storage.removeItem('refresh-token');
    navigate('/');
  };

  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <div className="left">
        <img alt="logo ioasys" src={logoImage} />
        <span className="subtitle">Books</span>
      </div>
      <div className="right">
        <div className="user-name">
          <span>Bem Vindo (a), </span>
          <span className="bold">{user.name}</span>
        </div>
        <i className="fas fa-sign-out-alt fa-lg icon" onClick={logout} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 576px) {
    .user-name { display: none };
  }

  .user-name {
    font-size: 0.9rem;
  };

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .bold {
    font-weight: bold;
  }

  .icon {
    cursor: pointer;
  }

`;
