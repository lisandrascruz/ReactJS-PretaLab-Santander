import "./styles.css";

const CaixaDeTexto = ({ label, placeholder, handleChange, value }) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    </div>
  );
};
export default CaixaDeTexto;
