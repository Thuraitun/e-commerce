import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()
  const [ total, setTotal ] = useState(0)
  const carts = JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    const totalPrice = carts.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0)

    setTotal(totalPrice);
  }, [carts])
  
  const percent =  ((1 * total)/100).toFixed(2)

  const handleIncrement = (id) => {
    const updateCart = carts.map(item => {

      if(item.id === id) {
   
        return {
          ...item,
          quantity: item?.quantity + 1,
        }
      }
      return item;
    })

    localStorage.setItem('cart', JSON.stringify(updateCart));
    navigate('/cart')
  }

  const handleDecrement = (id) => {
    const updateCart = carts.map(item => {
      if(item.id === id) {
        if(item?.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        } else {
          alert('Quantity is greater than 0')
        }
      }
      
      return item;
      
    })

    localStorage.setItem('cart', JSON.stringify(updateCart));
    navigate('/cart')
  }

  const handleRemove = (id) => {
    const updatedCart = carts.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart')
  }

  if(!carts.length) {
    return (<div className="min-h-[950px] my-40 ">
        <div className="text-center text-red-500 text-3xl">
          There is no cart
        </div>
        <div className="flex my-24">
          <Link to="/" className="py-1 px-3 border border-teal-500 flex space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
            <span className="">Go to shopping</span>
          </Link>
        </div>
      </div>)
  }
 
  return (
    <div className="min-h-[850px] py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                    <th className="text-left font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  { carts.map(cart => (
                      <tr key={cart.id}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src={cart?.image}
                              alt={cart?.title}
                            />
                            <div className="">
                              <p className="font-semibold">{cart?.category}</p>
                              <p className="text-sm">{cart?.title}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">${cart?.price}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button onClick={() => handleDecrement(cart?.id)} className="border rounded-md py-2 px-4 mr-2">
                              -
                            </button>
                            <span className="text-center w-8">{cart?.quantity}</span>
                            <button onClick={() => handleIncrement(cart?.id)} className="border rounded-md py-2 px-4 ml-2">
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4">${(cart?.price * cart?.quantity).toFixed(2)}</td>
                        <td className="py-4">
                          <button onClick={() => handleRemove(cart?.id)} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>${percent}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${percent}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${((percent*2)+ total).toFixed(2)}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="flex my-6">
          <Link to="/" className="py-1 px-3 border border-teal-500 flex space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
            <span className="">Go to shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
