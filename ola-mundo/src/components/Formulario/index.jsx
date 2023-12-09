import Botao from "../Botao";
import CaixaDeTexto from "../CaixaDeTexto";
import ListaDeItens from "../ListaDeItens";
import Titulo from "../Titulo";
import "./style.css";

const Formulario = () => {
  const listaCargos = ["Backend", "Design", "Frontend"];

  return (
    <section className="formulario">
      <form>
        <Titulo
          texto="Adicione as informações de uma pessoa preta de referencia para criar um
        card"
        />
        <CaixaDeTexto label="Nome" placeholder="Digite o seu nome..." />
        <CaixaDeTexto label="Cargo" placeholder="Digite o seu cargo..." />
        <CaixaDeTexto
          label="Imagem"
          placeholder="Digite o endereço da sua imagem..."
        />
        <ListaDeItens label="Time" opcoes={listaCargos} />
        <Botao label="Criar card" />
      </form>
    </section>
  );
};

export default Formulario;
