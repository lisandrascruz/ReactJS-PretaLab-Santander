import { Link } from "react-router-dom";
import "./styles.css";

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link className="menu-item" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/contador">
            Contador
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
