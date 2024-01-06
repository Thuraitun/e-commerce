import { Footer, Navbar } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-[1600px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
