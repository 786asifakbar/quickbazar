// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaHome, FaList, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu after clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="QuickBazar Logo" 
            className="w-20 md:w-24" // Adjust the size for smaller and larger screens
          />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-white text-3xl" />
          ) : (
            <FaBars className="text-white text-3xl" />
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <Link to="/" className="hover:text-purple-500 flex items-center">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/products" className="hover:text-purple-500 flex items-center">
            <FaList className="mr-2" /> Products
          </Link>
          <Link to="/categories" className="hover:text-purple-500 flex items-center">
            <FaList className="mr-2" /> Categories
          </Link>
          <Link to="/about" className="hover:text-purple-500 flex items-center">
            <FaInfoCircle className="mr-2" /> About
          </Link>
          <Link to="/contact" className="hover:text-purple-500 flex items-center">
            <FaEnvelope className="mr-2" /> Contact
          </Link>
          <Link to="/login" className="hover:text-purple-500 flex items-center">
            <FaUser className="mr-2" /> Login
          </Link>
          <Link to="/cart" className="hover:text-purple-500 flex items-center">
            <FaShoppingCart className="mr-2" /> Cart
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-blue-600 p-4`}>
        <Link to="/" className="block py-2 text-white hover:text-purple-500" onClick={closeMenu}>Home</Link>
        <Link to="/products" className="block py-2 text-white hover:text-purple-500" onClick={closeMenu}>Products</Link>
        <Link to="/categories" className="block py-2 text-white hover:text-purple-500" onClick={closeMenu}>Categories</Link>
        <Link to="/about" className="block py-2 text-white hover:text-purple-500" onClick={closeMenu}>About</Link>
        <Link to="/contact" className="block py-2 text-white hover:text-purple-500" onClick={closeMenu}>Contact</Link>
        <Link to="/login" className="block py-2 text-white hover:text-purple-500" onClick={closeMenu}>Login</Link>
        <Link to="/cart" className="block py-2 text-white hover:text-purple-500" onClick={closeMenu}>Cart</Link>
      </div>
    </header>
  );
};

export default Header;