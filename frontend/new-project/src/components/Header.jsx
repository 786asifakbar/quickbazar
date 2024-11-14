// src/components/Header.jsx
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaHome, FaList, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">QuickBazar</h1>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 flex items-center">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/products" className="hover:text-yellow-300 flex items-center">
            <FaList className="mr-2" /> Products
          </Link>
          <Link to="/categories" className="hover:text-yellow-300 flex items-center">
            <FaList className="mr-2" /> Categories
          </Link>
          <Link to="/about" className="hover:text-yellow-300 flex items-center">
            <FaInfoCircle className="mr-2" /> About
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 flex items-center">
            <FaEnvelope className="mr-2" /> Contact
          </Link>
          <Link to="/login" className="hover:text-yellow-300 flex items-center">
            <FaUser className="mr-2" /> Login
          </Link>
          <Link to="/cart" className="hover:text-yellow-300 flex items-center">
            <FaShoppingCart className="mr-2" /> Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;