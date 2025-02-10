import "../../styles/NavBar/cartWidget.css"
import cart from "../../assets/carrito-de-compras.png"

const CartWidget = () => {
    return (
        <img className="cart" src={cart} alt="" />
    )
}

export default CartWidget