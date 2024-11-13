// src/pages/ProductList.js
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sample products */}
        {[1, 2, 3].map((product) => (
          <div key={product} className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">Product {product}</h2>
            <p className="mb-2">Description of product {product}.</p>
            <Link to="/checkout" className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
