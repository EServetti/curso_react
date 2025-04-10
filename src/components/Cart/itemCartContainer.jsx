import "../../styles/Cart/item.css";
import trashcan from "../../assets/trashcan.png";

const Item = ({ id, name, thumbnail, price, amount, deleteFromCart }) => {
  return (
    <div className="cart-item">
      <span className="image_container">
        <img src={thumbnail} alt="image" />
      </span>
      <h3 style={{ textAlign: "center" }}>
        {name || "Name not provided"}
        {price !== 0 ? ` - ${price}` : " - free"}
      </h3>
      <span className="cart-amount">{amount}</span>
      <button className="cart-delete-button" onClick={() => deleteFromCart(id)}>
        <img src={trashcan} />
      </button>
    </div>
  );
};

export default Item;
