import { useEffect, useState } from "react";
import { estudantes } from "../../data/estudantes";
import Formulario from "../../components/Formulario";
import ListaDeEstudantes from "../../components/ListaDeEstudantes";

const InicioPage = () => {
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
      <Formulario setLista={setLista} lista={lista} />
      <ListaDeEstudantes lista={lista} />
    </>
  );
};

export default InicioPage;
