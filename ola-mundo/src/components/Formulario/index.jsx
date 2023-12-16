import Botao from "../Botao";
import CaixaDeTexto from "../CaixaDeTexto";
import "./styles.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <b>Preencha com os dados da mulher referência para cirar um card</b>
        <CaixaDeTexto label="Nome" placeholder="Digite o seu nome..." />
        <CaixaDeTexto label="Foto" placeholder="Digite a url da sua foto..." />
        <CaixaDeTexto
          label="Comida que não gosta"
          placeholder="Uma comida que não dá!!!"
        />
        <CaixaDeTexto label="Experiência massa" placeholder="Conta ai.." />
        <Botao texto="Criar card" />
      </form>
    </section>
  );
};

export default Formulario;
