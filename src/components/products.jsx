import { ProductCard } from "./productCard"
import { useState, useEffect } from "react"
import { Cart } from "./cart";


export function Products(){
const [products, setProducts] = useState(null);
const [error, setError] = useState(null)
const [loading, setLoading] = useState(true)
const [cart, setCart] = useState([])

useEffect(()=>{
    fetch('https://dummyjson.com/products/category/skin-care')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("server error");
      }
      return response.json();
    })
    .then(data => {
        const myProducts = data.products.map(product=> ({
            id: product.id,
            title: product.title,
            price : product.price,
            image: product.images[0],
            quantity: 1
        }))
        setProducts(myProducts)
    })
    .catch((error)=> setError(error))
    .finally(()=> setLoading(false))
},[])

if (loading) return <p>Loading...</p>;
if (error) return <p>A network error was encountered</p>;



return(
    <>
    <div className="flex flex-col gap-4 items-center min-h-screen pt-4">
    <h1>PRODUCTS</h1>
    <div className="flex gap-8">
          {products.map((product)=>(<ProductCard key={product.id} card={product} setCart={setCart}/>))}
         
    </div>
   
    </div>
    
    </>
   
)
}