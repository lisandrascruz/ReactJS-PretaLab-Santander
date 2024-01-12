import Botao from "../Botao/index";
import "./styles.css";

const Contador = () => {
  return (
    <section className="contador-section">
      <h1>Contador</h1>
      <main className="contador-main">
        <Botao texto="+" />
        <h2 className="counter-value">0</h2>
        <Botao texto="-" />
      </main>
    </section>
  );
};
export default Contador;
