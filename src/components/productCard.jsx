export function ProductCard({card}){
    return <>
    <div className="flex flex-col gap-8 border-2 border-black p-4  rounded">
      <div>{card.name}</div>
      <div>{card.price}</div>
      <div>
        <label htmlFor="">Quantity: </label>
       <input
       type="text"
       value={1}
       />
        <br></br>
        <button className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black mr-4 ">+</button>
        <button className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black ">-</button>
      </div>
      <button className="border-2 border-black bg-black text-white p-1 rounded hover:bg-white hover:text-black ">
        ADD TO CART
      </button>
    </div>
    </> 
}