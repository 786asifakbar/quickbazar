const express = require("express");
const axios = require("axios");
const router = express.Router();

// Backend route to fetch products from Amazon and Alibaba
router.get("/products", async (req, res) => {
  try {
    // Example Amazon API call
    const amazonProducts = await axios.get("https://api.example.com/amazon/products", {
      params: {
        keyword: "laptop",
      },
    });

    // Example Alibaba API call
    const alibabaProducts = await axios.get("https://api.example.com/alibaba/products", {
      params: {
        keyword: "laptop",
      },
    });

    // Combine products from both sources
    const products = [
      ...amazonProducts.data.products, // assuming Amazon returns products
      ...alibabaProducts.data.products, // assuming Alibaba returns products
    ];

    // Return combined product list
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

module.exports = router;
