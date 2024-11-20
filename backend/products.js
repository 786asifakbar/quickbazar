const express = require("express");
const router = express.Router();

// Sample product data (this can be dynamically fetched from a database or external API)
const products = [
  {
    id: 1,
    name: "Smartphone",
    category: "Electronics",
    image: "https://example.com/images/smartphone.jpg"
  },
  {
    id: 2,
    name: "Laptop",
    category: "Electronics",
    image: "https://example.com/images/laptop.jpg"
  },
  {
    id: 3,
    name: "Jacket",
    category: "Clothing",
    image: "https://example.com/images/jacket.jpg"
  },
  {
    id: 4,
    name: "Vacuum Cleaner",
    category: "Home Appliances",
    image: "https://example.com/images/vacuum_cleaner.jpg"
  },
  {
    id: 5,
    name: "Toy Car",
    category: "Toys",
    image: "https://example.com/images/toy_car.jpg"
  },
  {
    id: 6,
    name: "Book",
    category: "Books",
    image: "https://example.com/images/book.jpg"
  },
  // Add more products as needed
];

// Route to fetch products based on category
router.get("/products", (req, res) => {
  const { category } = req.query; // Get category from query parameters

  if (category && category !== "All") {
    // Filter products by category if category is provided
    const filteredProducts = products.filter(product => product.category === category);
    res.json(filteredProducts);
  } else {
    // If no category is provided or "All" is selected, return all products
    res.json(products);
  }
});

module.exports = router;
