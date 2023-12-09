import "./styles.css";

const ListaDeItens = ({ label, opcoes }) => {
  return (
    <div className="lista-de-itens">
      <label>{label}</label>
      <select>
        {opcoes.map((opcao, index) => (
          <option key={index} value={opcao.value}>
            {opcao}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ListaDeItens;
