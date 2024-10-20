import { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false); // For account dropdown
  const [buyDropdown, setBuyDropdown] = useState(false); // For Buy dropdown
  const [sellDropdown, setSellDropdown] = useState(false); // For Sell dropdown

  const handleChange = () => {
    setMenu(!menu);
  };

  const toggleAccountMenu = () => {
    setAccountMenu(!accountMenu); // Toggle account dropdown
  };

  const toggleBuyDropdown = () => {
    setBuyDropdown(!buyDropdown); // Toggle Buy dropdown
    setSellDropdown(false); // Close Sell dropdown if open
  };

  const toggleSellDropdown = () => {
    setSellDropdown(!sellDropdown); // Toggle Sell dropdown
    setBuyDropdown(false); // Close Buy dropdown if open
  };

  return (
    <header className="sticky top-0 z-10 bg-secondary bg-opacity-90 backdrop-blur-lg text-white py-4 shadow-md">
      {/* Desktop navigation section */}
      <nav className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GiSteeringWheel size={35} className="text-primary" />
          <Link to="/" className="font-bold text-2xl">
            BidWheels
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-xl">
          <Link to="/" className="hover:text-primary transition duration-200 ease-linear">
            Home
          </Link>
          
          {/* Buy Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleBuyDropdown}
              className="hover:text-primary transition duration-200 ease-linear"
            >
              Buy
            </button>
            {buyDropdown && (
              <ul className="absolute z-10 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <li className="hover:bg-gray-100">
                  <Link to="/auction" className="block px-4 py-2">Auction</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link to="/watchlist" className="block px-4 py-2">Watchlist</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Sell Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleSellDropdown}
              className="hover:text-primary transition duration-200 ease-linear"
            >
              Sell
            </button>
            {sellDropdown && (
              <ul className="absolute z-10 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <li className="hover:bg-gray-100">
                  <Link to="/create-listing" className="block px-4 py-2">Create Listing</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link to="/manage-listing" className="block px-4 py-2">Manage Listing</Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/about" className="hover:text-primary transition duration-200 ease-linear">
            About Us
          </Link>


          {/* Account Dropdown Menu */}
          <div className="relative">
            <AiOutlineUser
              size={25}
              className="cursor-pointer hover:text-primary transition duration-200 ease-linear"
              onClick={toggleAccountMenu}
            />
            {accountMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2">
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">Sign Up</Link>
                <Link to="/myaccount" className="block px-4 py-2 hover:bg-gray-100">My Account</Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* Responsive section */}
      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"} 
        md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
      >
        <Link to="/" className="hover:text-primary transition duration-200 ease-linear">
          Home
        </Link>
       

        {/* Buy Dropdown for Mobile */}
        <div className="relative">
          <button onClick={toggleBuyDropdown} className="hover:text-primary transition duration-200 ease-linear">
            Buy
          </button>
          {buyDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2">
            <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Auction</Link>
            <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">Watchlist</Link>
          </div>
          )}
        </div>

        {/* Sell Dropdown for Mobile */}
        <div className="relative">
          <button onClick={toggleSellDropdown} className="hover:text-primary transition duration-200 ease-linear">
            Sell
          </button>
          {sellDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2">
            <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Create Listing</Link>
            <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">Manage Listing</Link>
          </div>
          )}
        </div>

        <Link to="/about" className="hover:text-primary transition duration-200 ease-linear">
          About Us
        </Link>

        {/* Account Dropdown for Mobile */}
        <div className="relative">
          <AiOutlineUser
            size={25}
            className="cursor-pointer hover:text-primary transition duration-200 ease-linear"
            onClick={toggleAccountMenu}
          />
          {accountMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2">
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
              <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">Sign Up</Link>
              <Link to="/myaccount" className="block px-4 py-2 hover:bg-gray-100">My Account</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
