import { useState } from "react"



export function ProductCard({card}){
   
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
    <div className="flex flex-col gap-8 border-2 border-black p-4  rounded">
      <div><img src={card.image} alt="" /></div>
      <div>{card.title}</div>
      <div>${card.price * quantity}</div>
      <div>
        <label htmlFor="">Quantity: </label>
       <input
       type="text"
       value={quantity}
       onChange={(e) => setQuantity(e.target.value)}
       />
        <br></br>
        <button onClick={handleIncrement} className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black mr-4 ">+</button>
        <button onClick={handleDecrement} className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black ">-</button>
      </div>
      <button className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black ">
        ADD TO CART
      </button>
    </div>
    </> 
}