import Botao from "../Botao";
import CaixaDeTexto from "../CaixaDeTexto";
import "./styles.css";

const Formulario = ({ lista, setLista }) => {
  const criarCartao = (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const foto = document.getElementById("foto").value;
    const comidaNaoGosta = document.getElementById("comidaNaoGosta").value;
    const experienciaMassa = document.getElementById("experienciaMassa").value;

    const estudante = {
      nome: nome,
      foto: foto,
      comidaQueNaoGosta: comidaNaoGosta,
      experienciaPositiva: experienciaMassa,
    };

    const novaLista = [...lista, estudante];
    setLista(novaLista);
  };

  return (
    <section className="formulario">
      <form onSubmit={criarCartao}>
        <b>Preencha com os dados da mulher referência para cirar um card</b>
        <CaixaDeTexto
          id="nome"
          label="Nome"
          placeholder="Digite o seu nome..."
        />
        <CaixaDeTexto
          id="foto"
          label="Foto"
          placeholder="Digite a url da sua foto..."
        />
        <CaixaDeTexto
          id="comidaNaoGosta"
          label="Comida que não gosta"
          placeholder="Uma comida que não dá!!!"
        />
        <CaixaDeTexto
          id="experienciaMassa"
          label="Experiência massa"
          placeholder="Conta ai.."
        />
        <Botao texto="Criar card" acao={criarCartao} />
      </form>
    </section>
  );
};

export default Formulario;
