import "./styles.css";
//PROPS
const CaixaDeTexto = ({ id, label, placeholder }) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input id={id} placeholder={placeholder}></input>
    </div>
  );
};
export default CaixaDeTexto;
