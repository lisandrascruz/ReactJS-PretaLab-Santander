import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const PokemonPage = () => {
  const [pokemonsReferences, setPokemonsReferences] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  const fetchAllPokemons = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setPokemonsReferences(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar as referencias dos Pokemons:", error);
    }
  };

  const getPokemonsList = async () => {
    let tempList = [];

    for (const pokemon of pokemonsReferences) {
      try {
        const response = await axios.get(pokemon.url);
        tempList.push(response.data);
      } catch (error) {
        console.error("Erro ao buscar o Pokemon:", error);
      }
    }

    setPokemonList(tempList);
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  useEffect(() => {
    getPokemonsList();
  }, [pokemonsReferences]);

  console.log(pokemonList);
  return (
    <div className="pokemon-container">
      {pokemonList.map((pokemon, index) => (
        <a
          key={pokemon.id}
          className="pokemon-item"
          href={pokemon.forms[0].url}
        >
          <img src={pokemon.sprites.front_default} />
          <p key={index}>{pokemon.name}</p>
        </a>
      ))}
    </div>
  );
};
export default PokemonPage;
