import "./styles.css";

const Botao = ({ onClick, label }) => {
  return (
    <button className="botao" onClick={onClick}>
      {label}
    </button>
  );
};

export default Botao;
