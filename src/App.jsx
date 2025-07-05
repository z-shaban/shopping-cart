import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react";



function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="min-h-screen flex flex-col">

      <header className="flex justify-between bg-black text-white p-8">
        <h1>glow cosmetics</h1>
       <div className="flex gap-4">
        <Link to='home' className="hover:underline focus:underline active:underline">Home</Link>
        <Link to='products' className="hover:underline focus:underline active:underline">Products</Link>
        <Link to='cart' className="hover:underline focus:underline active:underline">Cart</Link>
       </div>
      </header>

      <main className="flex-1 ">
       <Outlet context={{cart, setCart}} />
      </main>
      <footer className="flex justify-center">
        <p>@2025</p>
      </footer>


      </div>
      
    </>
  )
}

export default App
