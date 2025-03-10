import "../../styles/ItemListContainer/Item.css";

const Item = ({ name, photo, onSale }) => {
  return (
    <div className="item">
      {onSale && (
        <span className="on_sale">On Sale!</span>
      )}
      <span className="image_container">
        <img src={photo} alt="image" />
      </span>
      <h3>{name || "Name not provided"} </h3>
    </div>
  );
};

export default Item;
