import "../../styles/Cart/finalizePurchase.css"
import close from "../../assets/equis.png"
import { useContext, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { createCheck } from "../../firebase"
import { CartContext } from "../../context/cartContext"

const FinalizePurchase = ({setShowFinalizePurchase, games, totalPrice}) => {
    const {setCarts} = useContext(CartContext)
    const [values, setValues] = useState({
        name: "",
        contact: "", 
        province: "",
        city: "",
        direction: "",
        cardNumber: "",
        secNumber: ""
    })
    // guardar dinamicamente los cambios en el formulario
    const handleChange = (e) => {
        const {name, value} = e.target
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }))   
    }
    // finalizar compra y guardar documento en firebase
    const handleFinalize = async (e) => {
        e.preventDefault()
        if (!values.name || !values.province || !values.city || !values.direction || !values.contact || !values.cardNumber || !values.secNumber) {
            toast.error("Please fill all the fields")
            return
        }
        const data = {
            ...values,
            gamesBought: games.map(g => g.id),
            totalPrice,
            purchaseDate: new Date(),
            status: "paid"
        }
        try {
            // si es exitosa la compra se crea el recibo y se guarda en la base de datos
            // luego se muestra un mensaje de exito y se borran los games del carrito
           const response = await createCheck(data) 
           toast.success(response)
           setCarts([])
           setShowFinalizePurchase(false)
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="main-finalize-purchase">
            <section className="finalize-top">
                <button onClick={() => setShowFinalizePurchase(false)}><img src={close} alt="close"/></button>
            </section>
            <form onChange={handleChange}>
                <label htmlFor="name">Enter your fullname</label>
                <input type="text" name="name" placeholder="name" id="name"/>
                <label htmlFor="telephone">Enter your telephone/email</label>
                <input type="text" name="contact" id="telephone" placeholder="telephone/email"/>
                <label htmlFor="direction">Enter your direction</label>
                <input type="text" name="province" placeholder="state/province"/>
                <input type="text" name="city" placeholder="city"/>
                <input type="text" name="direction" placeholder="direction"/>
                <label htmlFor="card">Enter your card number</label>
                <input type="number" name="cardNumber" placeholder="card number"/>
                <label htmlFor="security">Enter your card security number</label>
                <input type="number" name="secNumber" placeholder="security number"/>
                <button onClick={handleFinalize}>Purchase</button>
            </form>
        </div>
    )
}

export default FinalizePurchase