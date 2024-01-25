import Menu from "./Menu";
import "./styles.css";

const Header = () => {
  return (
    <>
      <Menu />
      <div className="banner">
        <img src="banner.svg" />
      </div>
    </>
  );
};
export default Header;
