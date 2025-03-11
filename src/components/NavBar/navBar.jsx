import "../../styles/NavBar/navBar.css";
import logo from "../../assets/Mega-removebg-preview.png";
import CartWidget from "./cartWidget";
import { Link } from "react-router-dom";

const NavBar = ({ setPage }) => {
  const handleOnSale = (value) => {
    setPage(value);
  };

  return (
    <div className="nav-bar">
      <img src={logo} alt="Logo" className="nav-bar-logo" />
      <ul className="nav-bar-routes">
        <Link to="/">
          <li onClick={() => handleOnSale("games")}>Games</li>
        </Link>
        <Link to="/">
          <li onClick={() => handleOnSale("onSale")}>On sale</li>
        </Link>
        <Link to="/">
          <li onClick={() => handleOnSale("bestSellers")}>Best sellers</li>
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
