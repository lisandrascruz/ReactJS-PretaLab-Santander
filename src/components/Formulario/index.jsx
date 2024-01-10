import { useState } from "react";
import Botao from "../Botao";
import CaixaDeTexto from "../CaixaDeTexto";
import "./styles.css";

const Formulario = ({ lista, setLista }) => {
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [comidaNaoGosta, setComidaNaoGosta] = useState("");
  const [experienciaMassa, setExperienciaMassa] = useState("");

  const limparFormulario = () => {
    setNome("");
    setFoto("");
    setComidaNaoGosta("");
    setExperienciaMassa("");
  };

  const criarCartao = (event) => {
    event.preventDefault();

    const estudante = {
      nome: nome,
      foto: foto,
      comidaQueNaoGosta: comidaNaoGosta,
      experienciaPositiva: experienciaMassa,
    };

    limparFormulario();

    const novaLista = [...lista, estudante];
    setLista(novaLista);
  };

  return (
    <section className="formulario">
      <form>
        <b>Preencha com os dados da mulher referência para cirar um card</b>

        <CaixaDeTexto
          value={nome}
          label="Nome"
          placeholder="Digite o seu nome..."
          handleChange={(e) => setNome(e.target.value)}
        />

        <CaixaDeTexto
          value={foto}
          label="Foto"
          placeholder="Digite a url da sua foto..."
          handleChange={(e) => setFoto(e.target.value)}
        />

        <CaixaDeTexto
          value={comidaNaoGosta}
          label="Comida que não gosta"
          placeholder="Uma comida que não dá!!!"
          handleChange={(e) => setComidaNaoGosta(e.target.value)}
        />

        <CaixaDeTexto
          value={experienciaMassa}
          label="Experiência massa"
          placeholder="Conta ai.."
          handleChange={(e) => setExperienciaMassa(e.target.value)}
        />

        <Botao texto="Criar card" acao={criarCartao} />
      </form>
    </section>
  );
};

export default Formulario;
