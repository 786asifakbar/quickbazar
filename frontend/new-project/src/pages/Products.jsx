// src/pages/Products.jsx
import React from "react";

const Products = () => {
  return (
    <div className="pt-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="border p-4 rounded-lg hover:shadow-lg transition-all">
            <img src={`https://via.placeholder.com/300?text=Product+${index + 1}`} alt={`Product ${index + 1}`} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product {index + 1}</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
