/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';

interface Props {
  page: number
  max: number
  setPage: (e: number) => void
}

export function Pagination({ page, max, setPage }: Props) {
  // true = avanca pagina
  // false = volta pagina
  const submit = (operacao: boolean) => {
    if (!operacao && page <= 1) return;
    if (operacao && page >= max) return;
    if (operacao) setPage(page + 1);
    if (!operacao) setPage(page - 1);
  };

  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <div className="left-pager">
        <span>Página</span>
        <span className="bold">{page}</span>
        <span>de</span>
        <span className="bold">{max}</span>
        <div className="icon" onClick={() => submit(false)}>
          <i className="fas fa-chevron-left fa-lg" />
        </div>
        <div className="icon" onClick={() => submit(true)}>
          <i className="fas fa-chevron-right margin fa-lg" />
        </div>
      </div>

      <div className="center-pager">
        <div className="icon" onClick={() => submit(false)}>
          <i className="fas fa-chevron-left fa-lg" />
        </div>
        <span className="margin">Página</span>
        <span className="bold">{page}</span>
        <span>de</span>
        <span className="bold">{max}</span>
        <div className="icon" onClick={() => submit(true)}>
          <i className="fas fa-chevron-right fa-lg" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 3rem 1rem;

  @media screen and (max-width: 576px) {
    .left-pager { display: none };
    .center-pager { display: flex };
  }

  @media screen and (min-width: 576px) {
    .left-pager { display: flex };
    .center-pager { display: none };
  }

  .left-pager {
    flex-direction: row;
  }

  .center-pager {
    flex-direction: row;
  }

  .unselected {
    border: 1px solid white;
    padding: 1rem;
  }
  .selected {
    border: 1px solid blue;
    padding: 1rem;
  }

  .bold {
    margin: 0 8px;
    font-weight: bold;
  }

  .margin {
    margin-left: 5px;
  }

  .icon {
    cursor: pointer;
  }

`;
