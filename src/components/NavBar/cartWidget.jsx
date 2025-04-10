import "../../styles/NavBar/cartWidget.css";
import cart from "../../assets/carrito-de-compras.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {CartContext} from "../../context/cartContext"

const CartWidget = () => {
  const {carts} = useContext(CartContext)
  const [cartsAmount, setCartsAmount] = useState(0)
  useEffect(()=>{
    const calculateGamesInCart = (carts) => {
      let total = 0
      carts.forEach(g => {
        total = total + g.amount
      });
      setCartsAmount(total)
    }
    calculateGamesInCart(carts)
  },[carts])

  return (
    <Link to="/cart" style={{textDecoration: "none", position: "relative"}}>
      <img className="cart" src={cart} alt="" />
      {carts.length > 0 && <span className="cart-widget-amount">{cartsAmount}</span>}
    </Link>
  );
};

export default CartWidget;
