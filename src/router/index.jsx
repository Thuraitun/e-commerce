import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import { Home, ProductDetail } from "../Pages";

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
        }
      ]
    },
  ]);


export default router;