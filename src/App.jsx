import { Home } from "./Pages";
import { Navbar, Product } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Home />
        <Product />
      </div>
    </div>
  );
}

export default App;
