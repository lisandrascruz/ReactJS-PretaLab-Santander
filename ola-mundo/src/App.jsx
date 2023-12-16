import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaDeEstudantes from "./components/ListaDeEstudantes";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
      <div style={{ marginBottom: "130px" }}>
        <Header />
        <Formulario />
        <ListaDeEstudantes />
      </div>
      <Rodape mensagem="Feito por amor por Lis <3" />
    </>
  );
}

export default App;
