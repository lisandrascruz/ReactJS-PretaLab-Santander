import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaDeEstudantes from "./components/ListaDeEstudantes";
import Rodape from "./components/Rodape";
import { estudantes } from "./data/estudantes";

function App() {
  const [lista, setLista] = useState(estudantes);

  //useEffect executado assim que entra no componente (componentDidMount)
  useEffect(() => {
    const listaStorage = localStorage.getItem("estudantes");

    if (listaStorage) {
      setLista(JSON.parse(listaStorage));
    }
  }, []);

  // useEffect executado ao haver uma mudança (componentDidUpdate)
  useEffect(() => {
    if (lista.length > 14) alert("Estudante adicionada com sucesso!");

    localStorage.setItem("estudantes", JSON.stringify(lista));
  }, [lista]);

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
