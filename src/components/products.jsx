import { ProductCard } from "./productCard"

export function Products(){


const Products = [
    {name: 'karamel set' , price: '$200'},
    {name: 'acne set' , price:'$150'},
    {name:'sunburn kit' , price: '$100'}

]

return(
    <>
    <div className="flex flex-col gap-4 items-center min-h-screen pt-4">
    <h1>PRODUCTS</h1>
    <div className="flex gap-8">
          {Products.map((product)=>(<ProductCard card={product}/>))}
    </div>
   
    </div>
    
    </>
   
)
}