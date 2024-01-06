import { Footer, Navbar } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-4 md:px-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
