import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemon } from '../../services/pokemonService';
import PokemonCard from '../../components/pokemons/PokemonCard';

function Details() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const requestPokemon = async () => {
      const pokemonData = await fetchPokemon(params.id);
      setPokemon(pokemonData);
    };

    requestPokemon();
  }, []);

  if (!pokemon) return null;

  return <PokemonCard {...pokemon} />;
}

export default Details;
