import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaDeEstudantes from "./components/ListaDeEstudantes";
import Rodape from "./components/Rodape";
import { estudantes } from "./data/estudantes";
import Contador from "./components/Contador";

function App() {
  const listaStorage = localStorage.getItem("estudantes");
  const [lista, setLista] = useState(JSON.parse(listaStorage) || estudantes);

  // onCreate
  useEffect(() => {
    if (listaStorage) {
      setLista(JSON.parse(listaStorage));
    }
  }, []);

  // onUpdate
  useEffect(() => {
    localStorage.setItem("estudantes", JSON.stringify(lista));
  }, [lista]);

  return (
    <>
      <div style={{ marginBottom: "130px" }}>
        <Header />
        <Contador />
        <Formulario setLista={setLista} lista={lista} />
        <ListaDeEstudantes lista={lista} />
      </div>
      <Rodape mensagem="Feito por amor por Lis <3" />
    </>
  );
}

export default App;
