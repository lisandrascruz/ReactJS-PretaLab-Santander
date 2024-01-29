import "./styles.css";

const CardPokemon = ({ url, nome, foto, id }) => {
  return (
    <a href={url} key={id} className="pokemon-item">
      <img src={foto} alt="Foto do pokemon" />
      <p> {nome} </p>
    </a>
  );
};

export default CardPokemon;
