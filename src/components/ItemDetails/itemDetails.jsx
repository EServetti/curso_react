import "../../styles/ItemDetails/itemDetails.css";
import { useParams } from "react-router-dom";
import cart from "../../assets/carrito-de-compras.png";
import useGame from "../../hooks/userGame";
import ItemCount from "./itemCount";
import { useContext, useState } from "react";
import {CartContext} from "../../context/cartContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetails = () => {
  const { id } = useParams();
  const { loading, game } = useGame(id);
  const {carts, setCarts} = useContext(CartContext)

  const [amount, setAmount] = useState(1)

  const addToCart = (game, amount) => {
    // reviso si el juego ya esta en el carrito, si ya existe intento aumentar
    // la cantidad, si la cantidad pasa el límite (3) muestro una alerta
    const gameExists = carts.find((g) => g.id === game.id)
    if (gameExists && gameExists.amount + amount <= 3) {
      const cartDTO = {
        ...game,
        amount: gameExists.amount + amount
      }
      setCarts((prevGames) => prevGames.filter(g => g.id !== game.id))
      setCarts((prevGames) => [
        ...prevGames,
        cartDTO
      ])
      toast.success("The game was added to the cart")
    } else if (gameExists && gameExists.amount + amount > 3) {
      toast.error("The max amount of a game is 3")
    } else {
      const cartDTO = {
        ...game,
        amount
      }
      setCarts((prevGames) => [
        ...prevGames,
        cartDTO
      ])
      toast.success("The game was added to the cart")
    }
    
  }

  return (
    <div className="main-item-details">
      <ToastContainer/>
      {loading ? (
        <span style={{ position: "absolute", top: "50%", right: "50%" }}>
          Loading...
        </span>
      ) : !game ? (
        <span style={{position: "absolute", top: "50%", width: "100%", textAlign: "center"}}>Sorry the game you're looking for does not exist.</span>
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
            <ItemCount amount={amount} setAmount={setAmount}/>
            <button onClick={() => addToCart(game, amount)}>
              Add to cart <img src={cart} />
            </button>
          </section>
        </>
      )}
    </div>
  );
};

export default ItemDetails;
