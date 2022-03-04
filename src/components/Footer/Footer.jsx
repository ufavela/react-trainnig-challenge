import React from 'react';
import styled from 'styled-components';

const DivStyle = styled.div`
  border: 3px outset #587de2;
  background-color: #93acf0;
  text-align: center;
`;

export default function Footer() {
  return (
    <DivStyle>
      <footer>
        <p>Copyright &copy; ulises.favela@tekprovider.net</p>
      </footer>
    </DivStyle>
  );
}
