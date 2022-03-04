import React, { useEffect, useState } from 'react';
import Element from '../../components/pokemons/Element';

function Lista({ elementos }) {
  const [pokemons, setPokemons] = useState(elementos);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    console.log(searchField);
    const pokemonFitered = elementos.filter((pokemon) => {
      if (searchField === '') return true;
      return pokemon.name.includes(searchField);
    });
    setPokemons(pokemonFitered);
  }, [searchField]);

  return (
    <div>
      <div align="center">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search Pokemon"
          onChange={(e) => setSearchField(e.target.value)}
        />
      </div>
      <div>
        {pokemons.map((pokemon) => (
          <Element pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Lista;
