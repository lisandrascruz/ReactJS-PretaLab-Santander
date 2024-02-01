import "./styles.css";

const Botao = ({ texto, acao }) => (
  <button className="botao" onClick={acao}>
    {texto}
  </button>
);

export default Botao;
