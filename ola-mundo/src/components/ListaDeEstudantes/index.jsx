import { estudantes } from "../../data/estudantes";
import CardEstudante from "../CardEstudante";
import "./styles.css";

const ListaDeEstudantes = () => {
  return (
    <div className="wrapper">
      {estudantes.map((estudante, idx) => (
        <CardEstudante
          key={idx}
          foto={estudante.foto}
          nome={estudante.nome}
          comidaNaoGosta={estudante.comidaQueNaoGosta}
          experienciaPositiva={estudante.experienciaPositiva}
        />
      ))}
    </div>
  );
};

export default ListaDeEstudantes;
