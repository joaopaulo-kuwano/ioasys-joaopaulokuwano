import React from 'react';
import styled from 'styled-components';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Props {
  page: number
  max: number
  setPage: (e: number) => void
}

export function Pagination({ page, max, setPage }: Props) {
  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <div className="left-pager">
        <span>Página</span>
        <span className="bold">{page}</span>
        <span>de</span>
        <span className="bold">{max}</span>
        <i className="fas fa-chevron-left" />
        <i className="fas fa-chevron-right icon" />
      </div>
    </Container>
  );
}

const Container = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 3rem 1rem;

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

  .icon {
    margin-left: 5px;
  }

`;
