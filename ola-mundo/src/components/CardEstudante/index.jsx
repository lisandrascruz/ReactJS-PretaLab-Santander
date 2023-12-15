import "./styles.css";

const CardEstudante = ({
  fotoUrl,
  nome,
  comidaQueNaoGosta,
  experienciaPositiva,
}) => {
  return (
    <div className="card">
      <img src={fotoUrl} alt="foto da estudante" />

      <div className="container">
        <h4>{nome}</h4>

        <p>
          <b>Comida que não gosta: </b>
          {comidaQueNaoGosta}
        </p>

        <p>
          <b>Uma experiência muito massa: </b>
          {experienciaPositiva}
        </p>
      </div>
    </div>
  );
};

export default CardEstudante;
