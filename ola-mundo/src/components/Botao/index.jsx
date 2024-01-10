import "./styles.css";

const Botao = ({ texto, acao }) => {
  return (
    <button className="botao" onClick={acao}>
      {texto}
    </button>
  );
};

export default Botao;
