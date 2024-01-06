import { useEffect, useState } from "react";
import { 
  Product, 
} from "../../components";
import Loading from "../../assets/loading.svg";

const Home = () => {
  const [ products, setProducts ] = useState([])
  const [ search, setSearch ] = useState('');
  

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }

    fetchProducts()
  }, [])

  const searchProducts = products.filter(p => {
    if(!search) {
      return p;
    }  
    if(search){
      return p.title.toUpperCase().includes(search.toUpperCase()) || p.category.toUpperCase().includes(search.toUpperCase());
    }
  })

  return (
    <>
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-orange-500 my-6">Products</h1>
      <div className="flex justify-end">
        <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search Products ......." className="input border border-orange-500 focus:border-orange-500 focus:outline-none w-full max-w-xs" />
      </div>
      { searchProducts.length > 0 ?
        <Product searchProducts={searchProducts} /> :
        <div className="flex justify-center my-4 min-h-screen">
          <img src={Loading} alt="" className="w-[100px]"/>
        </div>
      }
    </>
  );
}

export default Home;
