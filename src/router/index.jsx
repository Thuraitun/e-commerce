import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import { 
  Cart, 
  Home, 
  NoFound, 
  ProductDetail 
} from "../Pages";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "/products/:id",
          element: <ProductDetail />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "*",
          element: <NoFound />
        }
      ]
    },
  ]);


export default router;