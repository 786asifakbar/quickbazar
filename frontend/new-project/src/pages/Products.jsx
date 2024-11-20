import { useEffect , useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data); // Set fetched products to state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="pt-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg hover:shadow-lg transition-all">
            <img
              src={product.image || `https://via.placeholder.com/300?text=Product+${index + 1}`}
              alt={product.name || `Product ${index + 1}`}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name || `Product ${index + 1}`}</h3>
            <p className="text-blue-600 font-semibold">{product.price || "$100"}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
