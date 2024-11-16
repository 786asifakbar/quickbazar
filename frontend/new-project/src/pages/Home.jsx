import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from Amazon API (via your backend)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products?keyword=laptop');
        const data = await response.json();

        // Assuming the data contains the product details from Amazon
        const amazonProducts = data.Items.map(item => ({
          id: item.ItemId,
          name: item.ItemAttributes.Title,
          price: item.Offers[0].Offer.Price.FormattedPrice,
          image: item.LargeImage.URL,
        }));

        setProducts(amazonProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col items-center justify-center text-white px-6 md:px-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('undraw.png')",
        }}
      >
        <div className="text-center max-w-3xl text-gray-700">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-extrabold mb-6"
            style={{ textShadow: "4px 4px 6px rgba(128, 0, 128, 0.7)" }}
          >
            Welcome to <br />
            <span className="text-blue-700">Quick Bazar</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-8 opacity-90 text-gray-700">
            Explore our vast collection of products across various categories!
          </p>
          <button className="bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300 shadow-lg">
            Start Shopping
          </button>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Bestsellers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-bold mb-4">{product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
