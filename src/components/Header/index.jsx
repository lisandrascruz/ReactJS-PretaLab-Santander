import "./styles.css";
import Menu from "./Menu";

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
