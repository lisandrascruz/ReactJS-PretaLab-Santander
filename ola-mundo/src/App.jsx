import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaDeEstudantes from "./components/ListaDeEstudantes";
import Rodape from "./components/Rodape";
import { estudantes } from "./data/estudantes";

function App() {
  // hooks: gancho, anzol
  // useState()
  // const lista = estudantes;
  const [lista, setLista] = useState(estudantes);

  return (
    <>
      <div style={{ marginBottom: "130px" }}>
        <Header />
        <Formulario setLista={setLista} lista={lista} />
        <ListaDeEstudantes lista={lista} />
      </div>
      <Rodape mensagem="Feito por amor por Lis <3" />
    </>
  );
}

export default App;
