import { useMemo, useState } from "react";
import Botao from "../Botao";
import CaixaDeTexto from "../CaixaDeTexto";
import "./styles.css";

const Formulario = ({ lista, setLista }) => {
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [comidaNaoGosta, setComidaNaoGosta] = useState("");
  const [experienciaMassa, setExperienciaMassa] = useState("");

  const limparCampos = () => {
    setNome("");
    setFoto("");
    setExperienciaMassa("");
    setComidaNaoGosta("");
  };

  const criarCartao = (event) => {
    event.preventDefault();

    const estudante = {
      nome: nome,
      foto: foto,
      comidaQueNaoGosta: comidaNaoGosta,
      experienciaPositiva: experienciaMassa,
    };

    const novaLista = [estudante, ...lista];
    setLista(novaLista);

    limparCampos();
  };

  const quantidadeEstudantes = useMemo(() => lista.length, [lista]);

  return (
    <section className="formulario">
      <form onSubmit={criarCartao}>
        <b>Preencha com os dados da mulher referência para cirar um card</b>
        <br />
        <small>
          <i>Atualmente há {quantidadeEstudantes} estudantes cadastradas</i>
        </small>
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
