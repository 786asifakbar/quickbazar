import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">E-Shop</h2>
          <p className="text-sm mb-4">
            Your one-stop solution for online shopping. Discover a wide range of
            products and enjoy a seamless shopping experience.
          </p>
          <div className="flex gap-3">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">Shop</li>
            <li className="hover:text-gray-400 cursor-pointer">About Us</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-400 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>123 E-Commerce St, Karachi, Pakistan</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone />
              <span>+92 300 1234567</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>support@eshop.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Sign up to receive updates and special offers.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-5 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;