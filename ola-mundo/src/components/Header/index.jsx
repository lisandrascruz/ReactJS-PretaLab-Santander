import Menu from "./Menu";
import "./styles.css";

const Header = () => {
  return (
    <>
      <Menu />
      <div className="banner">
        <img src="../../../public/banner.png" />
      </div>
    </>
  );
};
export default Header;
