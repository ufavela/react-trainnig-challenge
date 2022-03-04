import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PokemonStile = styled.div`
  border: 3px outset blue;

  display: inline-block;
`;

function Element({ pokemon }) {
  return (
    <PokemonStile>
      <div>
        <img src={pokemon.image} width="50" height="60" alt="not found" />
      </div>
      <Link to={`/test1/${pokemon.name}`}>{pokemon.name}</Link>
    </PokemonStile>
  );
}

export default Element;
