import { CartContext } from "../../context/cartContext";
import "../../styles/Cart/cart.css";
import Item from "../Cart/itemCartContainer";
import { useContext, useState } from "react";
import FinalizePurchase from "./finalizePurchase";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const { carts, setCarts } = useContext(CartContext);
  const calculateTotal = (arrayOfCarts) => {
    let total = 0;
    arrayOfCarts.forEach((cart) => {
      total = total + cart.price * cart.amount;
    });
    return total;
  };
  const deleteFromCart = (id_game) => {
    setCarts((prevCarts) => {
      return prevCarts.filter((g) => g.id !== id_game);
    });
  };

  const [showFinalizePurchase, setShowFinalizePurchase] = useState(false);
  return (
    <>
      <div className="main-cart" style={showFinalizePurchase ? {opacity: 0.5} : null}>
      <ToastContainer/>
        {carts.length > 0 ? (
          <div className="carts-container">
            {carts.map((cart) => (
              <Item
                id={cart.id}
                name={cart.name}
                thumbnail={cart.thumbnail}
                price={cart.price}
                amount={cart.amount}
                deleteFromCart={deleteFromCart}
              />
            ))}
          </div>
        ) : (
          <p
            style={{
              padding: "20px",
              flex: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            You don't have any games in car, add at least one to finish a
            purchase
          </p>
        )}
        <aside
          className="cart-aside"
          style={carts.length === 0 ? { display: "none" } : null}
        >
          <h2>My Cart</h2>
          <p>{carts.length} games</p>
          <p>Total price: {calculateTotal(carts)}</p>
          <button onClick={() => setShowFinalizePurchase(true)}>
            Finalize purchase
          </button>
        </aside>
      </div>
      {showFinalizePurchase && <FinalizePurchase setShowFinalizePurchase={setShowFinalizePurchase} games={carts} totalPrice={calculateTotal(carts)}/>}
    </>
  );
};

export default Cart;
