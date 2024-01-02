const Navbar = () => {
  return (
    <nav className="py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="">
            <h1 className="text-2xl">E- <span className="text-orange-500">commerce</span></h1>
          </div>
          <div className="">
            <ul className="flex space-x-6">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="">
            <button className="px-4 py-1 border border-orange-500">
              Go to Cart
            </button>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
