import { useState } from "react"

const ItemCount = ({amount, setAmount}) => {
    return (
        <div style={{display: "flex", flexDirection: "row", gap: "10px", alignItems: "center"}}>
            <button onClick={() => setAmount(amount > 1 ? amount - 1 : amount)}>-</button>
            {amount}
            <button onClick={() => setAmount(amount < 3 ? amount + 1 : amount)}>+</button>
        </div>
    )
}

export default ItemCount