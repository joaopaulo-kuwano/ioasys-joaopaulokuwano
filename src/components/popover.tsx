import React from 'react';
import styled from 'styled-components';

interface Props {
  message: string
}
/**
 *
 * @param param0 texto da notif.
 * @returns  Popover que exibe qualquer mensagem de feedback
 */
export function PopOver({ message }: Props) {
  return (
    // eslint-disable-next-line no-use-before-define
    <Container>
      <div className="arrow_box">{message}</div>
    </Container>
  );
}

const Container = styled.div`

  position: relative;  
  border-radius: 30px;
  animation-name: opacityFrame;
  animation-duration: 3s;

  .arrow_box {
    position: relative;
    background: rgba(255,255,255,0.4);
    padding: 6px 10px;
    color: white;
    font-size: 0.8rem;
    border-radius: 10px;
  }
  
  .arrow_box:after {
    bottom: 100%;
    left: 50px;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    // border-color: rgba(107, 137, 255, 0);
    border-bottom-color: white;
    opacity: 0.4;
    border-width: 15px;
    margin-left: -15px;
}

`;
