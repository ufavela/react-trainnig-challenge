import React from 'react';
import styled from 'styled-components';

const DivStyle = styled.div`
  border: 10px outset #587de2;
  background-color: #58b2e2;
  text-align: center;
`;

export default function Header() {
  return (
    <DivStyle>
      <header>
        <h1>Mi Album Pokemon</h1>
      </header>
    </DivStyle>
  );
}
