import { Link } from "react-router-dom";
import "../../styles/ItemListContainer/Item.css";

const Item = ({ id,name, thumbnail, onSale }) => {
  return (
    <Link className="item" to={`/product/${id}`} >
      {onSale && (
        <span className="on_sale">On Sale!</span>
      )}
      <span className="image_container">
        <img src={thumbnail} alt="image" />
      </span>
      <h3 style={{textAlign: "center"}}>{name || "Name not provided"} </h3>
    </Link>
  );
};

export default Item;
