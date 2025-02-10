import "../../styles/ItemListContainer/Item.css"

const Item = ({name, photo, description, price}) => {
    return (
        <div className="item">
            <img src={photo} alt="image" />
            <h3>{name || "Name not provided"} </h3>
            <p>{description || "Description not provided"}</p>
            <p>${price || "No price"}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Item