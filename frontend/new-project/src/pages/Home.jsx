// src/pages/Home.js
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the E-Commerce Store</h1>
      <Link to="/products" className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Browse Products
      </Link>
    </div>
  );
};

export default Home;
