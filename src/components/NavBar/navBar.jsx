import "../../styles/NavBar/navBar.css";
import logo from "../../assets/Mega-removebg-preview.png";
import CartWidget from "./cartWidget";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="Logo" className="nav-bar-logo"/>
      <ul className="nav-bar-routes">
        <li>Games</li>
        <li>On sale</li>
        <li>Best sellers</li>
      </ul>
      <CartWidget/>
    </div>
  );
};

export default NavBar;
