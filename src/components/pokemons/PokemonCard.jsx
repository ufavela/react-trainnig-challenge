import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PokemonCardWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  width: 50%;
  img {
    width: 200px;
  }
`;

function PokemonCard({ name, sprites }) {
  return (
    <PokemonCardWrapper>
      Pokemon
      {name}
      <img src={sprites.front_default} alt="not found" />
    </PokemonCardWrapper>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  sprites: PropTypes.shape({
    front_default: PropTypes.string.isRequired,
    back_default: PropTypes.string.isRequired,
  }),
};

PokemonCard.defaultProps = {
  sprites: {
    front_default: '',
    back_default: '',
  },
};

export default PokemonCard;
