import { useEffect, useState } from "react";
import { 
  Product, 
} from "../../components";
import Loading from "../../assets/loading.svg";

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
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-gray-900 my-6">Products</h1>
        { products.length > 0 ?
          <Product products={products} /> :
          <div className="flex justify-center my-4 min-h-screen">
            <img src={Loading} alt="" className="w-[100px]"/>
          </div>
        }
    </>
  );
}

export default Home;
