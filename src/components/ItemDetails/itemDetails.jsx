import "../../styles/ItemDetails/itemDetails.css";
import { useParams } from "react-router-dom";
import cart from "../../assets/carrito-de-compras.png";
import useGame from "../../hooks/userGame";

const ItemDetails = () => {
  const { id } = useParams();
  const { loading, game } = useGame(id);

  return (
    <div className="main-item-details">
      {loading ? (
        <span style={{position: "absolute", top: "50%", right: "50%"}}>Loading...</span>
      ) : (
        <>
          <img className="game-image" src={game.photo} alt="image" />
          <section className="game-info">
            <h2>
              {game.name} - {game.producer}
            </h2>
            Category: {game.category}
            <p>{game.description}</p>
            <span>${game.price}</span>
            <button>
              Add to cart <img src={cart} />
            </button>
          </section>
        </>
      )}
    </div>
  );
};

export default ItemDetails;
