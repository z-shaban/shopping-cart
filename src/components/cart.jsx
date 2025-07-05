import { CartCard } from "./cartCard"
export function Cart({card, setCart}){
   const myCart = [
    {name:'karamel set', price:300, quantity:1},
     {name:'acne set', price:150, quantity:2},
      {name: 'suburn kit', price:250, quantity:1}
   ]

    return(
        <>
        <div className="flex flex-col items-center min-h-screen pt-4 ">
              <h1 className="pb-4">YOUR CART</h1>
              <div className="flex items-start space-x-16">
                <div>
                   {myCart.map((product)=> (<CartCard card = {product}/>))}
                </div>
                <div className="border-2 border-black p-4  rounded mb-4 ">
                    <p>order summary</p>
                    <p>Total: ${myCart.reduce((sum, product)=> sum + product.price*product.quantity ,0)} </p>
                </div>
              </div>
        </div>
      
        </>
    )

}