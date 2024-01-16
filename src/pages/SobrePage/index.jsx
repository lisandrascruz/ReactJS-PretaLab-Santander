import { Link } from "react-router-dom";

const SobrePage = () => {
  return (
    <main>
      <Link to="/sobre/mim">Sobre mim</Link>
      <br />
      <Link to="/sobre/pretalab">Sobre o PretaLab</Link>
    </main>
  );
};
export default SobrePage;
