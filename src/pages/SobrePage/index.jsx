import "./styles.css";
import { Link } from "react-router-dom";

const SobrePage = () => {
  return (
    <main className="center">
      <Link className="link" to="/sobre/mim">
        <p>Sobre Mim</p>
      </Link>
      <Link className="link" to="/sobre/preta-lab">
        <p>Sobre PretaLab</p>
      </Link>
    </main>
  );
};

export default SobrePage;
