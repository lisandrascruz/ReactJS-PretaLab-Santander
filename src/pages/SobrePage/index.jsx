import { Link } from "react-router-dom";
import "./styles.css";

const SobrePage = () => {
  return (
    <main className="center">
      <Link className="link" to="/sobre/mim">
        <p>Sobre mim</p>
      </Link>
      <br />
      <Link className="link" to="/sobre/pretalab">
        <p>Sobre o PretaLab</p>
      </Link>
    </main>
  );
};
export default SobrePage;
