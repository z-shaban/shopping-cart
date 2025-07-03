import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"


function App() {
  

  return (
    <>
      <header className="flex gap-4 bg-amber-500">
        <h1>glow cosmetics</h1>
       <div>
        <Link to='home'>Home</Link>
        <Link to='products'>Products</Link>
        <Link to='cart'>Cart</Link>
       </div>
      </header>

      <main>
       <Outlet/>
      </main>
      <footer>
        <p>@2025</p>
      </footer>

    </>
  )
}

export default App
