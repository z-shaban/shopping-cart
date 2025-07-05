import { CartCard } from "./cartCard"
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react"



export function Cart(){
    const {cart} = useOutletContext();
    const [total, setTotal] = useState(0)

    useEffect(() => {
    const calculatedTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);
  }, [cart]);

  
   

    return(
        <>
        <div className="flex flex-col items-center min-h-screen pt-4 ">
              <h1 className="pb-4">YOUR CART</h1>
              <div className="flex items-start space-x-16">
                <div>
                    {cart.length === 0 ? (
                   <p>Your cart is empty 🛒</p>
                    ) : (
                   cart.map((product) => <CartCard key={product.id} card={product} />)
                   )}
                </div>
                <div className="border-2 border-black p-4  rounded mb-4 ">
                    <p>order summary</p>
                    <p>Total: ${total} </p>
                </div>
              </div>
        </div>
      
        </>
    )

}