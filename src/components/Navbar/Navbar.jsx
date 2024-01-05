import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UseCart } from "../../Contexts/CartContext";

const Navbar = () => {
  const {carts} = UseCart();
  const [ cartCount, setCartCount ] = useState(0)

  useEffect(() => {
    const totalQuantity = carts.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setCartCount(totalQuantity)
  }, [carts])

  return (
    <>
      <nav className="py-4 sticky top-0 shadow-md z-10 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="">
            <Link to="/" className="text-2xl">
              E- <span className="text-orange-500">commerce</span>
            </Link>
          </div>

          <Link to="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <div className="absolute -top-3 -right-4">
              <span className=" bg-red-500 text-white rounded-full p-1 text-sm">
                {cartCount}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
