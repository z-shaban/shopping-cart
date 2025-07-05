
import { useState } from "react"

export function CartCard({card}){
const [quantity, setQuantity] = useState(1);
const handleIncrement= ()=>{
    setQuantity(quantity + 1)
  }

  const handleDecrement = ()=>{
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
  }
  

  return <>
    <div className="border-2 border-black p-4  rounded mb-4">
        <p>{card.name} </p>
        <p>${card.price} </p>
        <button onClick={handleIncrement} className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black mr-4 ">+</button>
        <p>{quantity} </p>
        <button onClick={handleDecrement} className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black ">-</button>
    </div>
  </>
}