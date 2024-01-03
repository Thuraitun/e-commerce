import { useEffect, useState } from "react";
import { 
  Features, 
  Product, 
  StatCard 
} from "../../components";

const Home = () => {
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }

    fetchProducts()
  }, [])
  return (
    <>
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
      </div>
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-gray-900">Products</h1>
        { products.length > 0 ?
          <Product products={products} /> :
          <div className="text-center my-10">loading...</div>
        }
      <Features/>
      <StatCard />
    </>
  );
}

export default Home;
