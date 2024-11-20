import { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const categories = ["All", "Electronics", "Clothing", "Home Appliances", "Books", "Toys"];

  const fetchProducts = async (category) => {
    setLoading(true);
    try {
      let apiUrl = "http://localhost:5000/api/products"; // Replace with your backend URL

      // Fetch data from backend based on category
      if (category !== "All") {
        apiUrl += `?category=${category}`;
      }

      const response = await axios.get(apiUrl);
      setProducts(response.data); // Set products received from API
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="pt-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Product Categories</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((category) => (
          <div
            key={category}
            className={`p-6 cursor-pointer bg-gray-100 rounded-lg hover:shadow-lg ${
              selectedCategory === category ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <h3 className="text-lg font-semibold">{category}</h3>
          </div>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center py-4">
          <span className="text-lg font-semibold">Loading...</span>
        </div>
      )}

      {/* Display Filtered Products */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg hover:shadow-lg transition-all"
            >
              <img
                src={product.image} // Assuming the API returns an image URL
                alt={product.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-blue-600 font-semibold">{product.category}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
