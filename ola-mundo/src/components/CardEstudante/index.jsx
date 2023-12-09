import "./styles.css";

const CardEstudante = ({ foto, nome, comidaNaoGosta, experienciaPositiva }) => (
  <div className="card">
    <img src={foto} alt="Avatar" />
    <div className="container">
      <h4>
        <b>{nome}</b>
      </h4>
      <p>
        <b>Comida que não gosta: </b>
        {comidaNaoGosta}
      </p>
      <p>
        <b>Uma experiência muito massa: </b>
        {experienciaPositiva}
      </p>
    </div>
  </div>
);

export default CardEstudante;
