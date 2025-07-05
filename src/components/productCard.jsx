import { useState } from "react"



export function ProductCard({card, setCart}){
   
  const [quantity, setQuantity] = useState(1);
  

  
  const addToCart = () => {
    setCart(prevCart => [...prevCart, card])
    
  }
 
 
    return <>
    <div className="flex flex-col gap-8 border-2 border-black p-4  rounded">
      <div><img src={card.image} alt="" /></div>
      <div>{card.title}</div>
      <div>${card.price * quantity}</div>
      <div>
      </div>
      <button onClick={addToCart} className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black ">
        ADD TO CART
      </button>
    </div>
    </> 
}