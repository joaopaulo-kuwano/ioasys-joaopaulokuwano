import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/bg-image.png';
import logoImage from '../../assets/logo.png';

export function LoginPage() {
  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      {/* <img src={backgroundImage} alt="imagem de fundo ioasys - 3 pessoas" className="img" /> */}
      <div className="center-box">
        <form>
          <div className="header">
            <img alt="logo ioasys" src={logoImage} />
            <span className="subtitle">Books</span>
          </div>
        </form>
      </div>
    </Container>
  );
}

/** Para o formulario flutuar na esquerda
 * divido a pagina em 3 grids
 * e alinho na direita do primeiro grid
 * O alinhamento vertical é feito em flex
 */
const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background-image: url(${backgroundImage});
  background-size: cover;
  
  .center-box {
    grid-column: 1/2;
    
    display: flex;

    flex-direction: row;
    // posição em linha
    justify-content: flex-end;

    // posição em coluna
    align-items: center;
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

`;
