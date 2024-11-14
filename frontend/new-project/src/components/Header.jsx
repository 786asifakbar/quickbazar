import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          QuickBazar
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/categories" className="hover:text-gray-300">Categories</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white text-black rounded-md">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 w-64 outline-none"
          />
          <button className="p-2 bg-blue-500 text-white rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* User and Cart Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="hover:text-gray-300">
            <FaUser className="text-xl" />
          </Link>
          <Link to="/cart" className="hover:text-gray-300 relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </Link>
          <button className="md:hidden text-2xl">
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;