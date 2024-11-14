// src/pages/Categories.jsx
import React from "react";

const Categories = () => {
  return (
    <div className="pt-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Product Categories</h2>
      <div className="flex flex-wrap gap-4">
        {["Electronics", "Clothing", "Home Appliances", "Books", "Toys"].map((category) => (
          <div key={category} className="p-6 bg-gray-100 rounded-lg hover:shadow-lg">
            <h3 className="text-lg font-semibold">{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;