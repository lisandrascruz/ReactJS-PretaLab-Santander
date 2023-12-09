import Botao from "../Botao";
import CaixaDeTexto from "../CaixaDeTexto";
import Titulo from "../Titulo";
import "./style.css";
import { estudantes } from "../../data/estudantes";

const Formulario = () => {
  const dadosNovaEstudante = {
    foto: "",
    nome: "",
    comidaQueNaoGosta: "",
    experienciaPositiva: "",
  };

  /*
    Uma função generica poderia resolver, mas optei por criar 4 funçoes 
    para que ficasse melhor o entendimento das estudantes e praticar
    o onChange asd
  */
  const aoMudarFoto = (event) => {
    const valorDigitado = event.target.value;
    console.log("Atualizando foto: " + valorDigitado);
    dadosNovaEstudante.foto = valorDigitado;
  };

  const aoMudarNome = (event) => {
    const valorDigitado = event.target.value;
    console.log("Atualizando nome: " + valorDigitado);
    dadosNovaEstudante.nome = valorDigitado;
  };

  const aoMudarComidaNaoGosta = (event) => {
    const valorDigitado = event.target.value;
    console.log("Atualizando comida que não gosta: " + valorDigitado);
    dadosNovaEstudante.comidaQueNaoGosta = valorDigitado;
  };

  const aoMudarExperienciaPositiva = (event) => {
    const valorDigitado = event.target.value;
    console.log("Atualizando experiencia positiva: " + valorDigitado);
    dadosNovaEstudante.experienciaPositiva = valorDigitado;
  };

  /*
    A gente fala do onSubmit e explica que ele funciona como o onClick
    no entanto focado para submissão de formulários. Ao clicar em criar 
    card esse dado será adicionado a lista mas como será visto no console.
    Mas não aparecerá na tela. Nesse momento vem a reflexão do porque não 
    foi renderizado na tela. Fica como brecha para aula de hooks.
  */
  const criarCard = (event) => {
    event.preventDefault();
    estudantes.push(dadosNovaEstudante);
    console.log(estudantes);
  };

  return (
    <section className="formulario">
      <form onSubmit={criarCard}>
        <Titulo texto="Crie um card para uma estudante preenchendo as informações do formuário" />
        <CaixaDeTexto
          onChange={aoMudarFoto}
          label="Link da sua foto"
          placeholder="Insira o link da sua foto..."
        />
        <CaixaDeTexto
          onChange={aoMudarNome}
          label="Nome"
          placeholder="Digite o seu nome..."
        />
        <CaixaDeTexto
          onChange={aoMudarComidaNaoGosta}
          label="Comida que não gosta"
          placeholder="Qual é aquela comida que não adianta insistir?"
        />
        <CaixaDeTexto
          onChange={aoMudarExperienciaPositiva}
          label="Uma experiência massa"
          placeholder="Lembra de alguma experiência que foi massa?"
        />
        <Botao label="Criar card" />
      </form>
    </section>
  );
};

export default Formulario;
