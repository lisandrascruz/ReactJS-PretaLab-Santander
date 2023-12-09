import "./styles.css";

const CaixaDeTexto = ({ label, placeholder, onChange }) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input placeholder={placeholder} onChange={onChange}></input>
    </div>
  );
};
export default CaixaDeTexto;
