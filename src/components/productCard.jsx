
import { useOutletContext } from "react-router-dom";



export function ProductCard({card}){
  const {setCart} = useOutletContext();
   
  
  const addToCart = (clickedProduct) => {
   setCart(prevCart => {
    const existing = prevCart.find(cartProduct => cartProduct.id === clickedProduct.id)
   
    if(existing){
     return prevCart.map(cartProduct => 
      cartProduct.id === clickedProduct.id?{...cartProduct, quantity: cartProduct.quantity + 1}: cartProduct
     )
    } else{
      return [...prevCart,  { ...clickedProduct, quantity: 1 }]
    }

   })
  
  }
 
 
    return <>
    <div className="flex flex-col gap-8 border-2 border-black p-4  rounded">
      <div><img src={card.image} alt="" /></div>
      <div>{card.title}</div>
      <div>${card.price}</div>
      <div>
      </div>
      <button onClick={()=> addToCart(card)} className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black ">
        ADD TO CART
      </button>
      
    </div>
    </> 
}