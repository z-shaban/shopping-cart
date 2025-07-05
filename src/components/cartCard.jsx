
import { useOutletContext } from "react-router-dom";

export function CartCard({card}){
const {setCart} = useOutletContext();


const handleIncrement= ()=>{
   setCart(prevCart =>
    prevCart.map(item =>
      item.id === card.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
  }

  const handleDecrement = ()=>{
   if (card.quantity > 1) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === card.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  } else {
    setCart(prevCart => prevCart.filter(item => item.id !== card.id));
  }
  }
  

  return <>
    <div className="border-2 border-black p-4  rounded mb-4">
        
        <img className="w-20 h-20" src={card.image} alt="" />
          <div>{card.title}</div>
          <div>${card.price * card.quantity}</div>
    
      

        <button onClick={handleIncrement} className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black mr-4 ">+</button>
        <p>{card.quantity} </p>
        <button onClick={handleDecrement} className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black ">-</button>
    </div>
  </>
}