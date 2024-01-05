import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      </div>
    </div>
  );
};

export default Cart;
