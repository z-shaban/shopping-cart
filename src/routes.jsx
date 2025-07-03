import App from "./App";
import { Cart } from "./components/cart";
import { Home } from "./components/home";
import { Products } from "./components/products";

const routes = [
{
    path: "/",
    element: <App/>,
    children: [
    {index: true, element:<Home/>},
    {path: 'home', element:<Home/>},
    {path: 'cart', element:<Cart/>},
    {path: 'products', element:<Products/>}
    ]
}
]

export default routes