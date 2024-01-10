import CardEstudante from "../CardEstudante";
import "./styles.css";

const ListaDeEstudantes = ({ lista }) => {
  return (
    <div className="wrapper">
      {lista.map((estudante, index) => (
        <CardEstudante
          key={index}
          nome={estudante.nome}
          fotoUrl={estudante.foto}
          comidaQueNaoGosta={estudante.comidaQueNaoGosta}
          experienciaPositiva={estudante.experienciaPositiva}
        />
      ))}
    </div>
  );
};

export default ListaDeEstudantes;
